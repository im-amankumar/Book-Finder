import React from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ book }) => {
  const {
    title,
    author_name,
    first_publish_year,
    cover_i,
    isbn,
    language,
    publisher,
    subject
  } = book;

  const coverUrl = cover_i 
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : 'https://via.placeholder.com/200x300/cccccc/666666?text=No+Cover';

  const authors = author_name ? author_name.join(', ') : 'Unknown Author';
  const subjects = subject ? subject.slice(0, 3).join(', ') : '';
  const isbnList = isbn ? isbn.slice(0, 2) : [];

  return (
    <div className={styles.bookCard}>
      <div className={styles.coverContainer}>
        <img
          src={coverUrl}
          alt={`Cover of ${title}`}
          className={styles.cover}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x300/cccccc/666666?text=No+Cover';
          }}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>by {authors}</p>
        
        {first_publish_year && (
          <p className={styles.year}>Published: {first_publish_year}</p>
        )}
        
        {publisher && publisher.length > 0 && (
          <p className={styles.publisher}>Publisher: {publisher[0]}</p>
        )}
        
        {language && language.length > 0 && (
          <p className={styles.language}>Language: {language.join(', ')}</p>
        )}
        
        {subjects && (
          <div className={styles.subjects}>
            <strong>Subjects:</strong> {subjects}
          </div>
        )}
        
        {isbnList.length > 0 && (
          <div className={styles.isbn}>
            <strong>ISBN:</strong> {isbnList.join(', ')}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
