import {useLoaderData} from 'remix';
import type {LoaderFunction} from 'remix';
import invariant from 'tiny-invariant';
import {getPost} from '~/posts';

export let loader: LoaderFunction = async ({params}) => {
  invariant(params.slug, 'expected params.slug');
  return getPost(params?.slug);
};

export default function PostSlug() {
  let post = useLoaderData();

  console.log('post title is: ', post);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
