import { Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Languages from './pages/Languages';
import Navbar from './components/NavBar';
import OverView from './pages/OverView';
import './main.scss';
import { useState, Activity } from 'react';
import { LanguageProvider } from './context/langContext';

function App() {
  const [isShowingBtn, setIsShowingBtn] = useState(true);
  return (
    <>
      <LanguageProvider>
        <header className="topbar">
          <button
            className="NavBarBtn"
            onClick={() => setIsShowingBtn(!isShowingBtn)}
          >
            Navigation
          </button>
          <h1>CMS translation</h1>

          <input className="searchBar" placeholder="Search..." type="text" />
        </header>
        <Activity mode={isShowingBtn ? 'visible' : 'hidden'}>
          <Navbar />
        </Activity>
        <div>
          <Routes>
            <Route path="/" element={<OverView />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Languages" element={<Languages />} />
          </Routes>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
