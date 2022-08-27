import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoryReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
