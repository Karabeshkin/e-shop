import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from '../features/Navbar/Navbar';
import CategoryList from '../features/Category/CategoryList';
import CategoryPage from '../features/Category/CategoryPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/categories/:title" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
