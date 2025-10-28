import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 800); // Increased from 300ms to 800ms

    return () => clearTimeout(timer);
  }, [query]);

  // Trigger search when debounced query changes
  useEffect(() => {
    if (debouncedQuery !== '') {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for books by title..."
          className={styles.searchInput}
          disabled={loading}
        />
        <button
          type="submit"
          className={styles.searchButton}
          disabled={loading || !query.trim()}
        >
          {loading ? '⏳' : '🔍'}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
