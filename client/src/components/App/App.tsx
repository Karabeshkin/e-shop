import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import ProductsList from '../features/Products/ProductsList';
import Navbar from '../features/Navbar/Navbar';
import CategoryList from '../features/Category/CategoryList';
import Registration from '../features/Auth/Registration';
import Authorization from '../features/Auth/Authorization';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/" element={<CategoryList />} />
        <Route path="/:title" element={<ProductsList />} />
      </Routes>
    </div>
  );
}

export default App;
