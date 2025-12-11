import './main.scss';
import Button from './components/button';
function App() {
  return (
    <>
      <div className="topbar">
        <h1>Site Title</h1>
      </div>
      <Button />

      <nav className="sidebar">
        <h2 className="NavTitle">Side bar</h2>
        <div className="userCard">
          <p>user</p>
        </div>
        <a href="#">Site1</a>
        <a href="#">Site2</a>
        <a href="#">Site3</a>
      </nav>

      <section className="">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </section>
    </>
  );
}

export default App;
