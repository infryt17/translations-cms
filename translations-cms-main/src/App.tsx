import './main.scss';
function App() {
  return (
    <>
      <header className="topbar">
        <h1>CMS</h1>
      </header>
      <input className="searchBar" type="text"></input>

      <nav className="sidebar">
        <h2 className="NavTitle">Menu</h2>
        <div className="userCard">
          <p>User</p>
        </div>

        <a href="#">Overview</a>
        <a href="#">Analytics</a>
        <a href="#">Languages</a>
      </nav>

      <main className="contentArea">
        <div className="grid">
          <div className="card large">Main Card</div>
          <div className="card">Small Card</div>
          <div className="card">Small Card</div>
          <div className="card wide">Wide Card</div>
        </div>
      </main>
    </>
  );
}

export default App;
