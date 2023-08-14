import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from '../features/Navbar/Navbar';
import CategoryList from '../features/Category/CategoryList';
import CategoryPage from '../features/Category/CategoryPage';
import MainPage from '../features/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/categories/:title" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
