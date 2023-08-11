import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import authSlice from '../features/Auth/authSlice';
import categoriesSlice from '../Category/categorySlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    categories: categoriesSlice,
    // auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
