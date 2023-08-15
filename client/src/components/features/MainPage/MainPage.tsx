import React from 'react';
import './MainPage.css';
import Sale from '../Sale/Sale';
import SectionShop from '../ SectionShop/SectionShop';
import Middle from '../Middle/Middle';

export default function MainPage(): JSX.Element {
  return (
    <div>
      <div className="Main">
        <SectionShop />
        <Middle />
        <Sale />
      </div>
    </div>
  );
}
