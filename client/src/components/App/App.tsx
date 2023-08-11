import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import ProductsList from '../features/Products/ProductsList';
import Navbar from '../features/Navbar/Navbar';
import CategoryList from '../features/Category/CategoryList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/:title" element={<ProductsList />} />
      </Routes>
    </div>
  );
}

export default App;
