import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import authSlice from '../features/Auth/authSlice';
import productsSlice from '../Products/productsSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    products: productsSlice,
    // auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
