import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import categoriesSlice from '../Category/categorySlice';
import authSlice from '../Auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    categories: categoriesSlice,
 },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
