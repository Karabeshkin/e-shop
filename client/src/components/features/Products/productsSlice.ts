import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';
import * as api from './api';

export const initialState: State = { products: [], error: '' };
export const productsInit = createAsyncThunk('products/init', () =>
  api.initProductsFetch()
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(productsInit.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export default productsSlice.reducer;
