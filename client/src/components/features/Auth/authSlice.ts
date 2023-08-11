import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Registration, State } from './type';
import * as api from './api';

const initialState: State = { user: {}, error: '' };

export const registrationUser = createAsyncThunk(
  'authUser/registration', (obj: Registration) => api.registrationFetch(obj)
);

const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registrationUser.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(registrationUser.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
});

export default authUserSlice.reducer;
