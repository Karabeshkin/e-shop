import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';
import * as api from './api';

export const initialState: State = {
  orderItems: [],
  error: '',
};
export const cartInit = createAsyncThunk('cart/init', () =>
  api.initCartFetch()
);

const cartSlice = createSlice({
  name: 'orderItems',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(cartInit.fulfilled, (state, action) => {
        state.orderItems = action.payload;
      })
      .addCase(cartInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
