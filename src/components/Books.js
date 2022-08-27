import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisplayBooks from './DisplayBooks ';
import { getAllBooks } from '../redux/books/books';
import AddBookForm from './AddBookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      <ul>
        {Object.values(books).map((book) => (
          <DisplayBooks key={book[1][0]} book={book} />
        ))}

      </ul>
      <div>
        <AddBookForm />
      </div>
    </>
  );
};

export default Books;
