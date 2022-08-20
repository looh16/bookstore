import React from 'react';
import BookForm from './form';
import bookstyles from '../css/Books.module.css';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Javascript',
      action: 'Programming Language',
      actor: 'Jhon David',
    },
    {
      id: 2,
      title: 'Html',
      action: 'Programming Language',
      actor: 'Maria Nick',
    },
  ];

  return (
    <section className={bookstyles.bookList}>
      <div>
        {books.map((book) => (
          <div key={book.id} className={bookstyles.details}>
            <li>{book.action}</li>
            <li>{book.title}</li>
            <li>{book.actor}</li>
          </div>
        ))}
        <BookForm />
      </div>
    </section>

  );
};

export default Books;
