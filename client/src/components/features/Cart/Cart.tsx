import React from 'react';
import { Link } from 'react-router-dom';

function Cart(): JSX.Element {
  return (
    <div>
      <img src={product.Photos[0].url} alt="product" />
      <div>{product.title}</div>
      <div>{product.cost}</div>
    </div>
  );
}

export default Cart;
