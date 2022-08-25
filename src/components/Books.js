import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import {
  selectAllBooks, getBooksError, getBooksStatus,
} from '../redux/books/books';
import DisplayBooks from './DisplayBooks ';
import bookStyles from '../css/Books.module.css';

const Books = () => {
  const books = useSelector(selectAllBooks);
  const bookStatus = useSelector(getBooksStatus);
  const error = useSelector(getBooksError);

  let content;
  if (bookStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (bookStatus === 'succeeded') {
    content = books.map((book) => <DisplayBooks key={book.id} book={book} />);
  } else if (bookStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section className={bookStyles.bookList}>
      {content}
    </section>

  );
};

export default Books;
