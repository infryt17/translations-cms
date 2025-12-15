export default function Navbar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <div className="userCard">User</div>

      <nav>
        <ul>
          <li>Overview</li>
          <li>Analitycs</li>
          <li>Languages</li>
        </ul>
        <button>Settings</button>
      </nav>
    </div>
  );
}
