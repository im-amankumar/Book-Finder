import React from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.css';

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <div className={styles.bookList}>
      <h2 className={styles.resultsHeader}>
        Found {books.length} book{books.length !== 1 ? 's' : ''}
      </h2>
      <div className={styles.grid}>
        {books.map((book, index) => (
          <BookCard key={`${book.key}-${index}`} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
