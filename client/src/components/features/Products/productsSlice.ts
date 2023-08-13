import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';
import * as api from './api';

export const initialState: State = { products: [], error: '' };
export const productsInit = createAsyncThunk('products/init', (title: string) =>
  api.initProductsFetch(title)
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(productsInit.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(productsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default productsSlice.reducer;
