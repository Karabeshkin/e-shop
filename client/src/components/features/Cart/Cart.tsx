import React from 'react';
import { OrderItemInc } from './type';

function Cart({ item }: { item: OrderItemInc }): JSX.Element {
  console.log(item, '=======');
  return (
    <div>
      <img src={item.Product.Photos[0].url} alt="product" />
      <div>{item.Product.title}</div>
      <div>{item.Product.cost}</div>
    </div>
  );
}

export default Cart;
