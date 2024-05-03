import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/" state={'This is state from home'}>Home</Link>
        </li>
        <li>
          <Link to="/about" state={'This is state from about'}>About</Link>
        </li>
        <li>
          <Link to="/posts" state={'This is state from posts'}>Posts</Link>
        </li>
        <li>
          <Link to="/redirect" state={'This is state from redirect'}>Redirect</Link>
        </li>
      </ul>
    </nav>
  )
}