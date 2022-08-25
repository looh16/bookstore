import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5dZTjliP6fmELhxxqmFV/books';

const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(BOOKS_URL);
  return response.data;
});

/**
* Redux Toolkit's createReducer API uses Immer internally automatically.
* So, it's already safe to "mutate" state inside of any case reducer
* function that is passed to createReducer: https://redux-toolkit.js.org/usage/immer-reducers
*/
const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: {
      reducer(state, action) {
        state.books.push(action.payload);
      },
      prepare(author, title, categoryId) {
        return {
          payload: {
            id: nanoid(),
            author,
            title,
            categoryId,
          },
        };
      },
    },
    bookRemoved: {

      reducer(state, action) {
        const bookId = action.payload;
        const books = state.books.filter((book) => book.id !== bookId);
        /* eslint-disable no-param-reassign */
        state.books = books;
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export const { bookAdded, bookRemoved } = books.actions;

export default books.reducer;
