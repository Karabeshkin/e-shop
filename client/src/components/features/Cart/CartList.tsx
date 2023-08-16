import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { cartInit } from './cartSlice';
import Cart from './Cart';
import { OrderItemInc } from './type';

function CartList(): JSX.Element {
  const dispatch = useAppDispatch();
  const orderItems = useSelector(
    (store: RootState) => store.orderItems.orderItems
  );
  useEffect(() => {
    dispatch(cartInit());
  }, [dispatch]);
  return (
    <div>
      {orderItems.map((item: OrderItemInc) => (
        <Cart item={item} key={item.id} />
      ))}
    </div>
  );
}

export default CartList;
