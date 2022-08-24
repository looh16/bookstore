import { useDispatch, useSelector } from 'react-redux';
import { selectAllBooks, bookRemoved } from '../redux/books/books';
import BookCategory from './BookCategory';
import bookstyles from '../css/Books.module.css';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);

  const deleteBook = (id) => {
    dispatch(
      bookRemoved(id),
    );
  };

  return (
    <section className={bookstyles.bookList}>
      <div>
        {books.map((book) => (
          <div key={book.id} className={bookstyles.details}>
            <p>
              <BookCategory categoryId={book.categoryId} />
            </p>
            <p>{book.title}</p>

            <button type="button" onClick={() => deleteBook(book.id)}>Delete Row</button>

          </div>
        ))}
      </div>
    </section>

  );
};

export default Books;
