import './main.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <h1>CMS translation</h1>
        <input className="searchBar" placeholder="Search..." type="text" />
      </header>

      <div className="layout">
        <nav className="sidebar">
          <h2>Menu</h2>

          <div className="userCard">User</div>

          <a href="#">Overview</a>
          <a href="#">Analytics</a>
          <a href="#">Languages</a>
        </nav>

        <main>
          <div className="grid">
            <div className="cardMain">Main Card</div>
            <div className="card">Small Card</div>
            <div className="card">Small Card</div>
            <div className="cardWide">Wide Card</div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
