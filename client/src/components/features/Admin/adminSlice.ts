import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddProduct, Product, State } from './type';
import * as api from './api';
import './Admin.css';

export const initialState: State = {
  products: [],
  categories: [],
  orders: [],
  error: '',
};

export const initProduct = createAsyncThunk('admin/product/init', () =>
  api.initAdminProductFetch()
);
export const delProduct = createAsyncThunk(
  'admin/product/del',
  ({ product }: { product: Product }) => api.delAdminProductFetch({ product })
);
export const addProduct = createAsyncThunk(
  'admin/product/add',
  (objFile: FormData) => api.addAdminProductFetch(objFile)
);
export const updProduct = createAsyncThunk(
  'admin/product/upd',
  (obj: AddProduct) => api.updAdminProductFetch(obj)
);
export const initOrder = createAsyncThunk('admin/order/init', () =>
  api.initAdminOrderFetch()
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
      })
      .addCase(initOrder.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(initOrder.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default adminProductInitSlice.reducer;
