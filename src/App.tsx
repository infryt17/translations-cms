import { Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Languages from './pages/Languages';
import Navbar from './components/NavBar';
import OverView from './pages/OverView';
import './main.scss';

function App() {
  return (
    <>
      <header className="topbar">
        <h1>CMS translation</h1>
        <input className="searchBar" placeholder="Search..." type="text" />
      </header>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<OverView />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Languages" element={<Languages />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
