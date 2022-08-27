/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import BookCategory from './BooksCategory';
import { removeBook } from '../redux/books/books';
import bookStyles from '../css/Books.module.css';

const DisplayBooks = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteBookFromAPI = (id) => {
    dispatch(removeBook(id));
    swal('Done!', `${book[1][0].title} successfully removed`, 'success');
    return navigate('/');
  };

  return (

    <article key={book[0]} className={bookStyles.details}>
      <p>
        <BookCategory categoryName={book[1][0].category} />
      </p>
      <p>{book[1][0].title}</p>
      <p>{book[1][0].author}</p>
      <ul key={book[0]} className={bookStyles.menuButtons}>
        <li>Comments</li>
        <li><button className={bookStyles.deleteButton} type="button" onClick={() => deleteBookFromAPI(book[0])}>Remove</button></li>
        <li>Edit</li>
      </ul>
    </article>
  );
};

export default DisplayBooks;
