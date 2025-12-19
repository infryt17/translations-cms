import type { ChangeEvent } from 'react';
import { useLanguages } from '../context/langContext';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  placeholder = 'Search...',
  className = 'searchBar',
}: SearchBarProps) => {
  const { searchQuery, setSearchQuery } = useLanguages();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default SearchBar;
