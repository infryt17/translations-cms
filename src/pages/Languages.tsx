import '../main.scss';
import LangList from '../components/LangList';
import { useLanguages } from '../context/langContext';

export default function Languages() {
  const { activeLanguages } = useLanguages();

  return (
    <div className="Llayout">
      <h1 className="topbar">Languages</h1>

      <div className="langGrid">
        <section className="langActive">
          <h3>Active Languages</h3>
          <ul className="langList">
            {activeLanguages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </section>

        <section className="langWork">
          <h3>Languages in Work</h3>
          <ul className="langList">
            <li>German</li>
            <li>French</li>
          </ul>
        </section>
      </div>

      <section className="settings">
        <h3>Settings</h3>
        <LangList />
      </section>
    </div>
  );
}
