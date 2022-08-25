/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/books';
import BookCategory from './BooksCategory';
import bookStyles from '../css/Books.module.css';

const DisplayBooks = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(
      bookRemoved(id),
    );
  };
  const entries = Object.entries(book);
  const books = [];
  /* eslint-disable no-plusplus */
  for (let index = 0; index < entries.length; index++) {
    const element = entries[index][1][0];
    books.push(element);
  }

  return (
    <div>
      {books.map((book) => (
        <>
          <article key={book.id} className={bookStyles.details}>
            <p>
              <BookCategory categoryName={book.category} />
            </p>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <ul className={bookStyles.menuButtons}>
              <li>Comments</li>
              <li><button className={bookStyles.deleteButton} type="button" onClick={() => deleteBook(book.id)}>Remove</button></li>
              <li>Edit</li>
            </ul>
          </article>
        </>
      ))}

    </div>
  );
};

export default DisplayBooks;
