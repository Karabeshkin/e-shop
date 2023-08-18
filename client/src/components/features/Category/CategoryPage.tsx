import React from 'react';
import ProductsList from '../Products/ProductsList';
import './Category.css';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';
import SectionShop from '../ SectionShop/SectionShop';

function CategoryPage(): JSX.Element {
  return (
    <div className="productList">
      <SectionShop />
      <div className="productMiddle">
        <NavbarMiddle />
        <div className="category">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
