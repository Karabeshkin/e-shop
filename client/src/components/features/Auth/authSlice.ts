import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState } from './type';
import * as api from './api';
import { UserAuthLog, UserAuthReg } from '../Users/types/user';

// наш ИНИШЛ СТЭЙТ
const initialState: AuthState = {
  user: null,
  error: undefined,
};

// наша САНОЧКА
export const registrationUser = createAsyncThunk('auth/registration', (value: UserAuthReg) =>
  api.registrationFetch(value)
);
export const authorizationUser = createAsyncThunk('auth/authorization', (value: UserAuthLog) =>
  api.authorizationFetch(value)
);

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
    })
    .addCase(authorizationUser.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(authorizationUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
  }
});

export default registrationUserSlice.reducer;
