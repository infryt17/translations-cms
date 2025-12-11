import './main.scss';
import Button from './components/button';
import { Activity } from 'react';
function App() {
  return (
    <>
      <header>
        <div className="SearchBar">Searchbar</div>
        <Activity>
          <div className="NavBar">navigaton</div>
        </Activity>
        <button className="navBarToggle">Toggle for nav</button>
      </header>
      <Button />
    </>
  );
}

export default App;
