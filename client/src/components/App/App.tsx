import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
// import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';
import Registration from '../features/Auth/Registration';
import Authorization from '../features/Auth/Authorization';
import CategoryPage from '../features/Category/CategoryPage';
import AdminProductsList from '../features/Admin/AdminProductsList';
import ProductPage from '../features/Products/ProductPage';
import ProductsList from '../features/Products/ProductsList';
import FavoritesList from '../features/Favorites/FavoritesList';
import CartList from '../features/Cart/CartList';


function App(): JSX.Element {
  return (
    <div className="App">
      {/* <Navbar /> */}
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
      </Routes>
    </div>
  );
}

export default App;
