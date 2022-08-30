/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import BookCategory from './BooksCategory';
import { removeBook } from '../redux/books/books';
import bookStyles from '../css/Books.module.css';

const DisplayBooks = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 20);

  const deleteBookFromAPI = (id) => {
    dispatch(removeBook(id));
    swal('Done!', `${book[1][0].title} successfully removed`, 'success');
    return navigate('/');
  };

  return (
    <div className={bookStyles.detailsMain}>
      <div key={book[0]} className={bookStyles.details}>
        <div>
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
        </div>
      </div>
      <div className={bookStyles.bookUpdateDetails}>
        <div className="progress-container" style={{ width: 120, height: 25 }}>
          <CircularProgressbar
            value={progress}
            className="col bg-white"
          />
        </div>
        <div>
          <h1 className="col bg-white percentage">
            {progress}
            %

          </h1>
          <p className="col bg-white fw-lighter fs-5 text-muted completed">Completed</p>
        </div>
        <div className={bookStyles.lineTwo} />
        <div className="col-3 bg-white">
          <p className="bg-white current-chapter">CURRENT CHAPTER</p>
          <p className="bg-white chapter">
            Chapter
            {' '}
            <span className="bg-white">{chapter}</span>
          </p>
          <button type="submit" className="btn btn-primary update">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBooks;
