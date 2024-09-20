import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by country name or capital"
      value={searchTerm}
      alt='Search...'
      onChange={(e) => onSearchChange(e.target.value)}
      className="p-2 border border-gray-300 rounded w-full text-black"
    />
  );
};

export default SearchBar;
