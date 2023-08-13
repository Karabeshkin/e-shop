import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import categoriesSlice from '../Category/categorySlice';
import productsSlice from '../Products/productsSlice';
import authSlice from '../Auth/authSlice';


const store = configureStore({
  reducer: {
  categories: categoriesSlice,
    products: productsSlice,
    // auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
