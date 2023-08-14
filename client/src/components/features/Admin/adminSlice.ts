import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddProduct, Product, State } from './type';
import * as api from './api';

export const initialState: State = { products: [], categories: [], error: '' };
export const initProduct = createAsyncThunk('admin/product/init', () =>
  api.initAdminProductFetch()
);
export const delProduct = createAsyncThunk(
  'admin/product/del',
  ({ product }: { product: Product }) => api.delAdminProductFetch({ product })
);
export const addProduct = createAsyncThunk(
  'admin/product/add',
  (obj: AddProduct) => api.addAdminProductFetch(obj)
);
export const updProduct = createAsyncThunk(
  'admin/product/upd',
  (obj: AddProduct) => api.updAdminProductFetch(obj)
);

const adminProductInitSlice = createSlice({
  name: 'adminProducts',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(initProduct.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.categories = action.payload.categories;
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
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      })
      .addCase(updProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default adminProductInitSlice.reducer;
