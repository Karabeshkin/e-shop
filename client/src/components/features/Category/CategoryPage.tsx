import React from 'react';
import ProductsList from '../Products/ProductsList';
import './Category.css';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';

function CategoryPage(): JSX.Element {
  return (
    <div className="productList">
      <div className="productMiddle">
      <NavbarMiddle/>
        <div className="category">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
