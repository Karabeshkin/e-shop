import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { cartInit, updOrder } from './cartSlice';
import Cart from './Cart';
import { OrderItemInc } from './type';
import './cart.css';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';

function CartList(): JSX.Element {
  const dispatch = useAppDispatch();
  const orderItems = useSelector(
    (store: RootState) => store.orderItems.orderItems
  );
  const [isLoading, setIsLoading] = useState(true);
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    setFullPrice(
      orderItems.reduce((acc, item) => acc + item.Product.cost * item.count, 0)
    );
  }, [orderItems]);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  useEffect(() => {
    dispatch(cartInit());
  }, [dispatch]);

  const sendOrder = (): void => {
    console.log('99')
    dispatch(updOrder(orderItems[0].order_id));
  };

  return (
    <div className='CartList'>
      {isLoading && (
        <div className="preloader">
          <div className="preloader__image">
            <img src="./Preloader.gif" alt="loader" />
          </div>
        </div>
      )}

      <div className='clasListName'>
        <NavbarMiddle/>
        {orderItems.length > 0 ? (
          <>
            {orderItems.map((item: OrderItemInc) => (
              <Cart item={item} key={item.id} />
            ))}
            <div>Итого: {fullPrice}</div>
            <button type="button" onClick={sendOrder}>
              Заказать
            </button>
          </>
        ) : (
          <div>Ваша корзина пуста</div>
        )}
      </div>
    </div>
  );
}

export default CartList;
