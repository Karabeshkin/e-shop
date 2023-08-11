import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import ProductsList from '../features/Products/ProductsList';

function App():JSX.Element {
  return (
    <div className="App">
      Magic E-SHOP
      <Routes>
        <Route path="/prod" element={<ProductsList />} />
      </Routes>
    </div>
  );
}

export default App;
