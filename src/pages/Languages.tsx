import '../main.scss';

export default function Languages() {
  return (
    <div>
      <h1 className="topbar">Languages</h1>

      <div>
        <section className="activeLng">
          <h3>Active Languages</h3>
          <ul>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </section>

        <section className="inWorkLng">
          <h3>Languages in Work</h3>
          <ul>
            <li>German</li>
            <li>French</li>
          </ul>
        </section>
      </div>

      <section>
        <h3>Language Settings</h3>
        <ul>
          <li>Block / unblock language</li>
          <li>Translation errors</li>
        </ul>
      </section>
    </div>
  );
}
