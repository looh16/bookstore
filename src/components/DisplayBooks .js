/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCategory from './BooksCategory';
import { deleteBook } from '../redux/books/books';
import bookStyles from '../css/Books.module.css';

const DisplayBooks = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [requestStatus, setRequestStatus] = useState('idle');
  const deleteBookFromAPI = (id) => {
    try {
      setRequestStatus('pending');
      dispatch(deleteBook({ id })).unwrap();
      navigate('/');
    } catch (err) {
      console.error('Failed to delete the post', err);
    } finally {
      setRequestStatus('idle');
    }
  };

  const entries = Object.entries(book);
  console.log(requestStatus);
  const books = [];
  /* eslint-disable no-plusplus */
  for (let index = 0; index < entries.length; index++) {
    const element = entries[index][1][0];
    books.push(element);
  }

  return (
    <div>
      {entries.map((book) => (
        <>
          <article key={book[0]} className={bookStyles.details}>
            <p>
              <BookCategory categoryName={book[1][0].category} />
            </p>
            <p>{book[1][0].title}</p>
            <p>{book[1][0].author}</p>
            <ul className={bookStyles.menuButtons}>
              <li>Comments</li>
              <li><button className={bookStyles.deleteButton} type="button" onClick={() => deleteBookFromAPI(book[0])}>Remove</button></li>
              <li>Edit</li>
            </ul>
          </article>
        </>
      ))}

    </div>
  );
};

export default DisplayBooks;
