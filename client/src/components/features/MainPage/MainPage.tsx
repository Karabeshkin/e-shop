import React from 'react';
import './MainPage.css';
import Sale from '../Sale/Sale';
import CategoryList from '../Category/CategoryList';
import SectionShop from '../ SectionShop/SectionShop';

export default function MainPage(): JSX.Element {
  return (
    <div>
      <div className="Main">
        <SectionShop />
        <CategoryList />
        <Sale />
      </div>
    </div>
  );
}
