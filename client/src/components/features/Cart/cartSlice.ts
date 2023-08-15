import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OrderItemInc, State } from './type';
import * as api from './api';

export const initialState: State = {
  orderItems: [],
  error: '',
};
export const cartInit = createAsyncThunk('cart/init', () =>
  api.initCartFetch()
);
export const delOrderItem = createAsyncThunk(
  'orderItem/del',
  ({ item }: { item: OrderItemInc }) => api.delOrderItemFetch({ item })
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
      })
      .addCase(delOrderItem.fulfilled, (state, action) => {
        state.orderItems = state.orderItems.filter(
          (item) => item.id !== Number(action.payload.id)
        );
      })
      .addCase(delOrderItem.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});

export default cartSlice.reducer;
