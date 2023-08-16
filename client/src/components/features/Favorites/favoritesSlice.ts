import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { State } from './type';

export const initialState: State = { favorites: [], error: '' };

export const initFavorite = createAsyncThunk('favorites/init', () =>
  api.initFavoriteFetch()
);

export const addFavorite = createAsyncThunk('favorites/add', (id: number) =>
  api.addFavoriteFetch(id)
);

export const delFavorite = createAsyncThunk('favorites/add', (id: number) =>
  api.delFavoriteFetch(id)
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(initFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(initFavorite.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default favoritesSlice.reducer;
