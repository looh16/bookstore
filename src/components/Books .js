import { useSelector } from 'react-redux';
import { selectAllBooks } from '../redux/books/books';
import Categories from './Categories';
import bookstyles from '../css/Books.module.css';

const Books = () => {
  const books = useSelector(selectAllBooks);

  return (
    <section className={bookstyles.bookList}>
      <div>
        {books.map((book) => (
          <div key={book.id} className={bookstyles.details}>
            <p>{book.title}</p>
            <p>
              <Categories categoryId={book.categoryId} />
            </p>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Books;
