import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';
import * as api from './api';
// import './Category.css';

export const initialState: State = { categories: [], error: '' };
export const categoriesInit = createAsyncThunk('category/init', () =>
  api.initCategoriesFetch()
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(categoriesInit.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(categoriesInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default categoriesSlice.reducer;
