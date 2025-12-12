import './main.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import Analytics from './pages/analitics';
import Languages from './pages/Languages';

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
          <Switch>
            <Routes>
              <Route path="/" />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/languages" element={<Languages />} />
            </Routes>
          </Switch>
        </nav>

        <main>
          <div className="grid">
            <div className="cardMain">Main Card</div>
            <div className="card">
              <h2>Small Card</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                placeat dolorem iste qui, similique consectetur optio sequi amet
                expedita, har um eum esse cum voluptas sint soluta nobis
                recusandae obcaecati? Quia. expedita, har um eum esse cum
                voluptas sint soluta nobis recusandae obcaecati? Quia. placeat
                dolorem iste qui, similique consectetur optio sequi amet
                expedita, har um eum esse cum voluptas sint soluta nobis
              </p>
            </div>
            <div className="card">
              <h2>Small Card</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                placeat dolorem iste qui, similique consectetur optio sequi amet
                expedita, har um eum esse cum voluptas sint soluta nobis
                recusandae obcaecati? Quia. expedita, har um eum esse cum
                voluptas sint soluta nobis recusandae obcaecati? Quia. placeat
                dolorem iste qui, similique consectetur optio sequi amet
                expedita, har um eum esse cum voluptas sint soluta nobis
              </p>
            </div>
            <div className="cardWide">Wide Card</div>
            <div className="outputCard">Log/error output</div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
