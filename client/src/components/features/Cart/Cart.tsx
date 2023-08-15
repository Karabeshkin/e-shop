import React from 'react';
import { OrderItemInc } from './type';
import { delOrderItem } from './cartSlice';
import { useAppDispatch } from '../store/store';

function Cart({ item }: { item: OrderItemInc }): JSX.Element {
  const dispatch = useAppDispatch();
  const delItem = (): void => {
    dispatch(delOrderItem({ item }));
  };
  return (
    <div>
      <img src={item.Product.Photos[0].url} alt="product" />
      <div>{item.Product.title}</div>
      <button type="button" onClick={delItem}>
        <img src="./garbage.png" alt="garbage" />
      </button>
      <div>{item.Product.cost}</div>
    </div>
  );
}

export default Cart;
