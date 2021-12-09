import {Link} from 'remix';

export default function Header() {
  return (
    <header className="remix-app__header">
      <div className="container remix-app__header-content">
        <Link to="/" title="Remix" className="text-xl font-mono">
          <h1>Niall Barber</h1>
        </Link>
        <nav aria-label="Main navigation" className="remix-app__header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
