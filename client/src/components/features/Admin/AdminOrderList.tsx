import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { initOrder } from './adminSlice';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';
import AdminOrderCard from './AdminOrderCard';

function AdminOrderList(): JSX.Element {
  const dispatch = useAppDispatch();
  const adminOrders = useSelector(
    (store: RootState) => store.adminProducts.orders
  );
  useEffect(() => {
    dispatch(initOrder());
  }, [dispatch]);
  return (
    <>
      <NavbarMiddle />
      <div className="orderList">
        {adminOrders.map((order) => (
          <AdminOrderCard order={order} key={order.id} />
        ))}
      </div>
    </>
  );
}

export default AdminOrderList;
