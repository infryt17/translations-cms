import React, {
  useContext,
  createContext,
  useState,
  type ReactNode,
} from 'react';

interface LanguageContextValue {
  activeLanguages: string[];
  setActiveLanguages: React.Dispatch<React.SetStateAction<string[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);
interface LanguageProviderProps {
  children: ReactNode;
}
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLanguages, setActiveLanguages] = useState<string[]>([
    'English',
    'Spanish',
  ]);
  return (
    <LanguageContext.Provider
      value={{
        activeLanguages,
        setActiveLanguages,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguages(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('data must be used in a LanguageProvider');
  }

  return context;
}
