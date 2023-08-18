import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { updOrder } from './cartSlice';
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
  }, 1000);

  const sendOrder = (): void => {
    dispatch(updOrder(orderItems[0].order_id));
  };

  return (
    <div className="CartList">
      {isLoading && (
        <div className="preloader">
          <div className="preloader__image">
            <img src="./Preloader.gif" alt="loader" />
          </div>
        </div>
      )}

      <div className="clasListName">
        <NavbarMiddle />
        {orderItems.length > 0 ? (
          <>
            {orderItems.map((item: OrderItemInc) => (
              <Cart item={item} key={item.id} />
            ))}
            <div className="button_fp">
              <div className="fullPrice">{`      Итого: ${fullPrice} руб.`}</div>
              <div>
                <button type="button" onClick={sendOrder}>
                  Заказать
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>Ваша корзина пуста</div>
        )}
      </div>
    </div>
  );
}

export default CartList;
