import { createAsyncThunk } from '@reduxjs/toolkit';
import BookService from '../../services/BooksService';

const GET_ALL_BOOKS = 'books/GET_ALL_BOOKS';
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const books = [];

export const getAllBooks = createAsyncThunk(
  GET_ALL_BOOKS,
  async () => {
    const { data } = await BookService.getAllBooks();
    return { books: Object.entries(data) };
  },
);

// eslint-disable-next-line camelcase
export const addBook = (item_id, title, author, category) => async (dispatch) => {
  await BookService.addBook({
    // eslint-disable-next-line camelcase
    item_id, title, author, category,
  }).then(() => dispatch(getAllBooks()));
};

export const removeBook = (id) => async (dispatch) => {
  await BookService.removeBook(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: { id },
  });
};

const reducer = (state = books, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${GET_ALL_BOOKS}/fulfilled`:
      return payload.books;
    case `${ADD_BOOK}/fulfilled`:
      return { ...state, ...payload };
    case REMOVE_BOOK:
      // eslint-disable-next-line max-len
      return Object.fromEntries(Object.entries(state).filter((book) => book[1][0] !== payload.id));
    default:
      return state;
  }
};

export default reducer;
