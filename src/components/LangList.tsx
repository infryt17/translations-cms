import { useState } from 'react';
import { useLanguages } from '../context/langContext';

export default function LangList() {
  const { activeLanguages, setActiveLanguages } = useLanguages();
  const [newLang, setNewLang] = useState<string>('');

  function addLang(): void {
    if (!newLang.trim()) return;
    setActiveLanguages((prev) => [...prev, newLang.trim()]);
    setNewLang('');
  }

  function stopLang(langToRemove: string): void {
    setActiveLanguages((prev) => prev.filter((lang) => lang !== langToRemove));
  }

  return (
    <div>
      <ul>
        {activeLanguages.map((lang) => (
          <li key={lang}>
            {lang} <button onClick={() => stopLang(lang)}>Remove</button>
          </li>
        ))}
      </ul>

      <input
        value={newLang}
        onChange={(e) => setNewLang(e.target.value)}
        placeholder="Add language"
      />
      <button onClick={addLang}>Add</button>
    </div>
  );
}
