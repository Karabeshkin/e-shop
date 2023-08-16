import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { cartInit } from './cartSlice';
import Cart from './Cart';
import { OrderItemInc } from './type';
import './cart.css';

function CartList(): JSX.Element {
  const dispatch = useAppDispatch();
  const orderItems = useSelector(
    (store: RootState) => store.orderItems.orderItems
  );
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000); //
  useEffect(() => {
    dispatch(cartInit());
  }, [dispatch]);
  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="preloader__image">
            <img src="./Preloader.gif" alt="loader" />
          </div>
        </div>
      )}

      <div>
        {orderItems.length > 0 ? (
          <>
            {orderItems.map((item: OrderItemInc) => (
              <Cart item={item} key={item.id} />
            ))}
            <div>Итого: {orderItems.reduce((accum, item)=>accum+item.Product.cost,0)}</div>
            <button type="button">Заказать</button>
          </>
        ) : (
          <div>Ваша корзина пуста</div>
        )}
      </div>
    </>
  );
}

export default CartList;
