import {useLoaderData} from 'remix';
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

export default function AboutIndex() {
  const posts = useLoaderData<Posts[]>();

  return (
    <div>
      <h1>About page!</h1>
      <ul>
        {posts.map(({id, title, content}) => (
          <li key={id}>
            <h3>{title}</h3>
            <span>{content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
