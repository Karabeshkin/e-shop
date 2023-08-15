import React from 'react';
import './Middle.css';
import CategoryList from '../Category/CategoryList';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';
import Search from '../Search/Search';

function Middle(): JSX.Element {
  return (
    <div className="Middle">
      <NavbarMiddle />
      <Search />
      <CategoryList />
    </div>
  );
}

export default Middle;
