import {Link, useLoaderData} from 'remix';
import type {MetaFunction} from 'remix';
import {getPosts} from '~/posts';
import type {Posts} from '~/posts';

export let meta: MetaFunction = () => ({
  title: 'About page!!',
  description: 'test',
});

export let loader = () => {
  return getPosts();
};

export default function PostsIndex() {
  const posts = useLoaderData<Posts[]>();

  return (
    <div>
      <h1>Posts page!</h1>
      <ul>
        {posts.map(({id, title, slug, content}) => (
          <li key={id}>
            <Link to={slug}>
              <h3>{title}</h3>
              <span>{content}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
