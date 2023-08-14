import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import AdminProductCard from './AdminProductCard';
import { initProduct } from './adminSlice';

function AdminProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const adminProducts = useSelector(
    (store: RootState) => store.adminProducts.products
  );

  useEffect(() => {
    dispatch(initProduct());
  }, [dispatch]);

  return (
    <div>
      {adminProducts.map((product) => (
        <AdminProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default AdminProductsList;
