import {supabase} from '~/client';
import invariant from 'tiny-invariant';
import parseFrontMatter from 'front-matter';
import {marked} from 'marked';
import {mapSingleArrayToObject} from '~/utils/mapSingleArrayToObject';

export type Posts = {
  id?: number;
  title?: string;
  slug?: string;
  content?: string;
};

export async function getPost(slug: string): Promise<Posts> {
  let {data, error} = await supabase.from('posts').select().eq('slug', slug);
  if (error) console.log(error);
  invariant(data, 'expected data');
  // transform that data into markdown readable code
  let post = mapSingleArrayToObject(data);
  let {body} = parseFrontMatter(post.content);
  let html = marked(body);
  post.content = html;
  return post;
}

export async function getPosts(): Promise<Posts[] | unknown> {
  let {data} = await supabase.from('posts').select();
  return data;
}
