import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

/* eslint-disable import/prefer-default-export */
export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});
