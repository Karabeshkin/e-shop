import * as React from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';
import * as api from './api';

export const initialState: State = {
  products: [],
  product: undefined,
  error: '',
  searchedJobs: [],
};
export const productsInit = createAsyncThunk('products/init', (title: string) =>
  api.initProductsFetch(title)
);
export const oneProductInit = createAsyncThunk(
  'oneProduct/init',
  ({ title, idProd }: { title: string; idProd: string }) =>
    api.initOneProductFetch({ title, idProd })
);
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleSearchProducts: (state, action) => {
      state.searchedJobs = [];
      state.searchedJobs.push(action.payload)
    },
    clearState: (state) => {
      state.products = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(productsInit.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(productsInit.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(oneProductInit.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(oneProductInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { handleSearchProducts } = productsSlice.actions;
export const { clearState } = productsSlice.actions;
export default productsSlice.reducer;
