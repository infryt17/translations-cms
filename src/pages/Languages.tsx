import '../main.scss';
import LangList from '../components/LangList';
import { useLanguages } from '../context/langContext';

export default function Languages() {
  const { activeLanguages } = useLanguages();

  return (
    <div>
      <h1 className="topbar">Languages</h1>

      <section className="activeLng">
        <h3>Active Languages</h3>
        <ul>
          {activeLanguages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </section>

      <section className="inWorkLng">
        <h3>Languages in Work</h3>
        <ul>
          <li>German</li>
          <li>French</li>
        </ul>
      </section>

      <section>
        <h3>Language Settings</h3>
        <LangList />
      </section>
    </div>
  );
}
