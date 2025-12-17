import { useState } from 'react';
import { useLanguages } from '../context/langContext';
import '../context/langContext';

export default function LangList() {
  const { activeLanguages, setActiveLanguages } = useLanguages();
  const [newLang, setNewLang] = useState('');

  function addLang() {
    if (!newLang.trim()) return;
    setLanguages((prev) => [...prev, newLang.trim()]);
    setNewLang('');
  }

  function stopLang(langToRemove: string) {
    setLanguages((prev) => prev.filter((lang) => lang !== langToRemove));
  }

  function resetTranslating() {
    setLanguages(['English', 'Spanish']);
    setNewLang('');
  }

  return (
    <div>
      <h2>Languages</h2>

      <ul>
        {languages.map((lang) => (
          <li key={lang}>
            {lang} <button onClick={() => stopLang(lang)}>stop</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newLang}
        onChange={(e) => setNewLang(e.target.value)}
        placeholder="Add language"
      />
      <button onClick={addLang}>Add</button>

      <div>
        <button onClick={resetTranslating}>Reset</button>
      </div>
    </div>
  );
}
