import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 0,
      title: 'The Hunger Games',
      categoryId: 1,
    },
    {
      id: 1,
      title: 'Capital in the Twenty-First Century',
      categoryId: 2,
    },
  ],
};
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
      prepare(title, categoryId) {
        return {
          payload: {
            id: nanoid(),
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
});

export const selectAllBooks = (state) => state.books.books;

export const { bookAdded, bookRemoved } = books.actions;

export default books.reducer;
