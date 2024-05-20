import React, { useState } from 'react';
import { searchBooks } from '../services/api';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchBooks(query);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching books', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((book) => (
          <li key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
