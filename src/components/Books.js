/* eslint-disable react/prop-types */
import React from 'react';
import DisplayBooks from './DisplayBooks ';

const Books = ({ books }) => {
  const bookList = Object.entries(books);

  return (
    <>
      <ul>
        {bookList.map((book) => (
          <DisplayBooks key={book[0]} book={book} />
        ))}
      </ul>
    </>
  );
};

export default Books;
