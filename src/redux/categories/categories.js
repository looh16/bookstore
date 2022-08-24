import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, name: 'Action' },
  { id: 1, name: 'Economy' },
  { id: 2, name: 'Science Fiction' },
];

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const selectAllCategories = (state) => state.categories;

export default categories.reducer;
