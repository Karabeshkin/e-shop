import React from 'react';
import './Middle.css';
import CategoryList from '../Category/CategoryList';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';

function Middle(): JSX.Element {
  return (
    <div className="Middle">
      <NavbarMiddle />

      <CategoryList />
    </div>
  );
}

export default Middle;
