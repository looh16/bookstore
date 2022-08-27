import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

/* eslint-disable import/prefer-default-export */
const reducer = {
  books: bookReducer,
  categories: categoryReducer,
};

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
