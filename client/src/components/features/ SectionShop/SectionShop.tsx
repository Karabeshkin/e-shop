import React from 'react';
import Eshop from '../Eshop/Eshop';
import Section from '../Section/Section';
import './SectionShop.css';

function SectionShop(): JSX.Element {
  return (
    <div className="SectionShop">
      <Eshop />
      <Section />
    </div>
  );
}

export default SectionShop;
