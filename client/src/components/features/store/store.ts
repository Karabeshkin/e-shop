import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import categoriesSlice from '../Category/categorySlice';
import productsSlice from '../Products/productsSlice';
import authSlice from '../Auth/authSlice';
import adminProductInitSlice from '../Admin/adminSlice';


const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    adminProducts: adminProductInitSlice,
    products: productsSlice,
    // auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
