import {supabase} from '~/client';
import invariant from 'tiny-invariant';

export type Posts = {
  id?: number;
  title?: string;
  slug?: string;
  content?: string;
};

export async function getPost(slug: string): Promise<Posts> {
  let {data, error} = await supabase.from('posts').select().eq('slug', slug);
  let post: Posts = {};

  if (error) {
    console.log(error);
  }

  invariant(data, 'expected data');

  for (const item of data) {
    for (const key in item) {
      post[key] = item[key];
    }
  }

  return post;
}

export async function getPosts(): Promise<Posts[] | unknown> {
  let {data} = await supabase.from('posts').select();
  return data;
}
