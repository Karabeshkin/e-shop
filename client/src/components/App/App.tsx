import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from '../features/MainPage/MainPage';
import Registration from '../features/Auth/Registration';
import Authorization from '../features/Auth/Authorization';
import CategoryPage from '../features/Category/CategoryPage';
import AdminProductsList from '../features/Admin/AdminProductsList';
import ProductPage from '../features/Products/ProductPage';
import ProductsList from '../features/Products/ProductsList';
import FavoritesList from '../features/Favorites/FavoritesList';
import CartList from '../features/Cart/CartList';
import { initFavorite } from '../features/Favorites/favoritesSlice';
import { useAppDispatch } from '../features/store/store';
import { authCheckUser } from '../features/Auth/authSlice';
import { cartInit } from '../features/Cart/cartSlice';
import AdminOrderList from '../features/Admin/AdminOrderList';
import NotFoundPage from '../features/Page404/NotFoundPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authCheckUser());
  }, []);

  useEffect(() => {
    dispatch(initFavorite());
  }, [dispatch]);

  useEffect(() => {
    dispatch(cartInit());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/:title" element={<ProductsList />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/admin" element={<AdminProductsList />} />
        <Route path="/categories/:title" element={<CategoryPage />} />
        <Route path="/categories/:title/:idProd" element={<ProductPage />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/admin/orders" element={<AdminOrderList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
