import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import Books from './Books';
import AddBookForm from './AddBookForm';

const Home = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Books books={books} />
        <AddBookForm />
      </div>
    </div>
  );
};

export default Home;
