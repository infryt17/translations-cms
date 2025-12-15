import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <div className="userCard">User</div>

      <nav>
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>Overview</li>
          </Link>
          <Link to="/Analytics" style={{ textDecoration: 'none' }}>
            <li>Analitycs</li>
          </Link>
          <Link to="/Languages" style={{ textDecoration: 'none' }}>
            <li>Languages</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
