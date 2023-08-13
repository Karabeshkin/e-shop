import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';
import * as api from './api';

export const initialState: State = { products: [], error: '' };
export const initProduct = createAsyncThunk('admin/product/init', () =>
  api.initAdminProductFetch()
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
      });
  },
});

export default adminProductInitSlice.reducer;
