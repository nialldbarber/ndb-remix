import type {MetaFunction} from 'remix';

export let meta: MetaFunction = () => ({
  title: 'Niall Barber | Contact',
  description: 'Welcome to the contact page',
});

export default function ContactIndex() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-xl">Contact page!</h1>
    </div>
  );
}
