import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Javascript',
    categoryId: 1,
  },
  {
    id: 2,
    title: 'Javascript',
    categoryId: 2,
  },
];

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: {
      reducer(state, action) {
        state.push(action.payload);
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
  },
});

export const selectAllBooks = (state) => state.books;

export const { bookAdded } = books.actions;

export default books.reducer;
