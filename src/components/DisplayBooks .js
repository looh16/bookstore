import { useDispatch, useSelector } from 'react-redux';
import { selectAllBooks, bookRemoved } from '../redux/books/books';
import BookCategory from './BooksCategory';
import bookStyles from '../css/Books.module.css';

// Use Redux in React components.
const DisplayBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);

  const deleteBook = (id) => {
    dispatch(
      bookRemoved(id),
    );
  };

  return (
    <section className={bookStyles.bookList}>
      {books.map((book) => (
        <article key={book.id} className={bookStyles.details}>
          <p>
            <BookCategory categoryId={book.categoryId} />
          </p>
          <p>{book.title}</p>
          <ul className={bookStyles.menuButtons}>
            <li>Comments</li>
            <li><button className={bookStyles.deleteButton} type="button" onClick={() => deleteBook(book.id)}>Remove</button></li>
            <li>Edit</li>
          </ul>
        </article>
      ))}
    </section>

  );
};

export default DisplayBooks;
