import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Registration, AuthState } from './type';
import * as api from './api';

// наш ИНИШЛ СТЭЙТ
const initialState: AuthState = {
  user: null,
  error: undefined,
};

// наша САНОЧКА
export const registrationUser = createAsyncThunk(
  'authUser/registration', (obj: Registration) => api.registrationFetch(obj)
);
// const authorizationUser = createAsyncThunk(
//   'authUser/authorization', (obj: Authorization) => api.authorizationFetch(obj)
// );

// наш СЛАЙС
const registrationUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registrationUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = '';
    })
    .addCase(registrationUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.user = null;
    });
  }
});

export default registrationUserSlice.reducer;
