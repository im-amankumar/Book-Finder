import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import BookList from './components/BookList/BookList';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import styles from './App.module.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const searchBooks = useCallback(async (query) => {
    if (!query.trim()) {
      setBooks([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Optimized API call with better parameters for faster response
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=20&fields=title,author_name,first_publish_year,cover_i,isbn,key`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs);
      } else {
        setBooks([]);
        setError('No books found. Try a different search term.');
      }
    } catch (err) {
      console.error('Error searching books:', err);
      setError('Failed to search books. Please check your internet connection and try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    searchBooks(query);
  }, [searchBooks]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>📚 Book Finder</h1>
          <p className={styles.subtitle}>Find your next great read</p>
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          {error && <ErrorMessage message={error} />}
          
          {loading && (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Searching for books...</p>
            </div>
          )}

          {!loading && !error && searchQuery && books.length === 0 && (
            <div className={styles.noResults}>
              <p>No books found for "{searchQuery}". Try a different search term.</p>
            </div>
          )}

          {!loading && books.length > 0 && (
            <BookList books={books} />
          )}

          {!loading && !searchQuery && (
            <div className={styles.welcome}>
              <h2>Welcome to Book Finder!</h2>
              <p>Search for books by title to get started.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
