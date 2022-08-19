import React from 'react';
import Form from './form';

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
    <section>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <li>{book.action}</li>
            <li>{book.title}</li>
            <li>{book.actor}</li>
          </div>
        ))}
        <Form />
      </div>
    </section>

  );
};

export default Books;
