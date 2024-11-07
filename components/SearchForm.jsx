'use client'
import { useState } from 'react';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      // Reindirizza a Google con la query di ricerca
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca su Google..."
        className="border p-2 mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Cerca
      </button>
    </form>
  );
};

export default SearchForm;