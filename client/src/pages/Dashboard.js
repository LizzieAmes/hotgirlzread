import React from 'react';
import BookSearch from '../components/BookSearch';
import { fetchBooks } from '../services/api';

const Dashboard = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      setBooks(response.data);
    };

    getBooks();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <BookSearch />
      <h2>Current Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
