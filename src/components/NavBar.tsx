import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <div className="userCard">User</div>

      <nav>
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Overview
          </Link>
        </li>
        <li>
          <Link to="/Analytics" style={{ textDecoration: 'none' }}>
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/Languages" style={{ textDecoration: 'none' }}>
            Languages
          </Link>
        </li>
      </nav>
    </div>
  );
}
