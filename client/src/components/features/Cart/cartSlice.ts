import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OrderItemInc, State, UpdItem, UpdOrder } from './type';
import * as api from './api';

export const initialState: State = {
  orderItems: [],
  error: '',
};
export const cartInit = createAsyncThunk('cart/init', () =>
  api.initCartFetch()
);
export const addCartThunk = createAsyncThunk('cart/add', (id: number) => {
  api.addCartFetch(id);
});
export const delOrderItem = createAsyncThunk(
  'orderItem/del',
  (item: OrderItemInc) => api.delOrderItemFetch(item)
);
export const updOrderItem = createAsyncThunk(
  'orderItem/updplus',
  (item: UpdItem) => api.updateOrderItemFetch(item)
);
export const updOrder = createAsyncThunk('updOrder', (id: number) =>
  api.sendOrderFetch(id)
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
      .addCase(updOrderItem.fulfilled, (state, action) => {
        state.orderItems = state.orderItems.map((item) =>
          item.id === action.payload?.id
            ? { ...item, count: action.payload.count }
            : item
        );
      })
      .addCase(updOrderItem.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updOrder.fulfilled, (state) => {
        state.orderItems = [];
      })
      .addCase(updOrder.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
