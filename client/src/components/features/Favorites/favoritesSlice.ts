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

export const delFavorite = createAsyncThunk('favorites/del', (id: number) =>
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
        const finded = state.favorites.filter(
          (el) => el.id === action.payload.id
        );
        if (finded.length > 0) {
          state.favorites.filter(
            (el) => el.product_id !== action.payload.product_id
          );
        } else {
          state.favorites.push(action.payload);
        }
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delFavorite.fulfilled, (state, action) => {
        state.favorites.filter(
          (el) => el.product_id !== action.payload.product_id
        );
      })
      .addCase(delFavorite.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default favoritesSlice.reducer;
