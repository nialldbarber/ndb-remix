import {useLoaderData} from 'remix';
import type {LoaderFunction} from 'remix';
import invariant from 'tiny-invariant';
import {getPost} from '~/utils/posts';

export let loader: LoaderFunction = async ({params}) => {
  invariant(params.slug, 'expected params.slug');
  return getPost(params?.slug);
};

export default function PostSlug() {
  let post = useLoaderData();

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: post.content}} />
    </div>
  );
}
