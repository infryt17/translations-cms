export default function Languages() {
  return (
    <>
      <h1 className="topbar">Languages page</h1>
      <div className="languagesCont">
        <div className="activeLng">
          <h3>Active Languages</h3>
        </div>

        <div className="inWorkLng">
          <h3>Languages in work</h3>
        </div>
      </div>
      <h3>Languages settings</h3>
      <div>
        <p>block or unblock laungage</p>
      </div>
      <div>
        <p>translating errors</p>
      </div>
    </>
  );
}
