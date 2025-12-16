import '../main.scss';
export default function Analytics() {
  return (
    <>
      <h1 className="topbar">Analytics</h1>

      <div className="layout">
        <section className="grid">
          <div className="card cardMain">
            <h3>Last changes log</h3>
            <ul>
              <li>Updated users </li>
              <li> lang support</li>
              <li>Dashboard </li>
            </ul>
          </div>

          <div className="card outputCard">
            <h3>Users:</h3>
            <p>2000</p>
            <span>+""% from last month</span>
          </div>

          <div className="card cardWide">
            <h3>Most used languages: </h3>
            <div className="langCont">
              <div className="activeLng"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
