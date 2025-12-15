import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <div className="userCard">User</div>

      <nav>
        <ul>
          <Link to="/">
            <li>Overview</li>
          </Link>
          <Link to="/Analytics">
            <li>Analitycs</li>
          </Link>
          <Link to="/Languages">
            <li>Languages</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
