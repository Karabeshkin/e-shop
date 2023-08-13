import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product, State } from './type';
import * as api from './api';

export const initialState: State = { products: [], error: '' };
export const initProduct = createAsyncThunk('admin/product/init', () =>
  api.initAdminProductFetch()
);
export const delProduct = createAsyncThunk(
  'admin/product/del',
  ({ product }: { product: Product }) => api.delAdminProductFetch({ product })
);

const adminProductInitSlice = createSlice({
  name: 'adminProducts',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(initProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(initProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (el) => el.id !== Number(action.payload.id)
        );
      })
      .addCase(delProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default adminProductInitSlice.reducer;
