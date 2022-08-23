import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, name: 'Dude Lebowski' },
  { id: 1, name: 'Neil Young' },
  { id: 2, name: 'Dave Gray' },
];

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const selectAllCategories = (state) => state.categories;

export default categories.reducer;
