import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from '../features/Navbar/Navbar';
import CategoryList from '../features/Category/CategoryList';
import CategoryPage from '../features/Category/CategoryPage';
import AdminProductsList from '../features/Admin/AdminProductsList';
import ProductPage from '../features/Products/ProductPage';


function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/:title" element={<ProductsList />} />
        <Route path="/admin" element={<AdminProductsList />} />
        <Route path="/categories/:title" element={<CategoryPage />} />
        <Route path="/categories/:title/:idProd" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
