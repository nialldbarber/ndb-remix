import type {MetaFunction} from 'remix';

export let meta: MetaFunction = () => ({
  title: 'Niall Barber | About',
  description: 'Welcome to the about page',
});

export default function AboutIndex() {
  return (
    <div className="bg-gray-100">
      <h1>About page!</h1>
    </div>
  );
}
