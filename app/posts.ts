import {supabase} from '~/client';

export type Posts = {
  id: number;
  title: string;
  content: string;
};

export async function getPosts(): Promise<Posts[] | unknown> {
  const {data} = await supabase.from('posts').select();
  return data;
}
