import React from 'react';
import { OrderItemInc } from './type';
import { delOrderItem, updOrderItem } from './cartSlice';
import { useAppDispatch } from '../store/store';

function Cart({ item }: { item: OrderItemInc }): JSX.Element {
  const dispatch = useAppDispatch();
  const delItem = (): void => {
    dispatch(delOrderItem(item));
  };
  const updMinus = (): void => {
    dispatch(updOrderItem({ id: item.id, count: item.count - 1 }));
  };
  const updPlus = (): void => {
    dispatch(updOrderItem({ id: item.id, count: item.count + 1 }));
  };
  return (
    <div>
      <img src={item.Product.Photos[0].url} alt="product" />
      <div>{item.Product.title}</div>
      <div>{item.Product.cost}</div>
      <button type="button" onClick={delItem}>
        <img src="./garbage.png" alt="garbage" />
      </button>
      <div>
        <button type="button" onClick={() => updMinus()}>
          -
        </button>
        <div>{item.count}</div>
        <button type="button" onClick={updPlus}>
          +
        </button>
      </div>
    </div>
  );
}

export default Cart;
