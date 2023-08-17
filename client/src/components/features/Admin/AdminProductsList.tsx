import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import AdminProductCard from './AdminProductCard';
import { initProduct } from './adminSlice';
import AdminAddForm from './AdminAddForm';
import './Admin.css';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';

function AdminProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const adminProducts = useSelector(
    (store: RootState) => store.adminProducts.products
  );

  useEffect(() => {
    dispatch(initProduct());
  }, [dispatch]);

  return (
    <div className="AdminPage">
      <div className="AdminPageMiddle">
        <NavbarMiddle />
        <div className="AdminAddForm ">
          <AdminAddForm />
        </div>
        <div className="MapProduct">
          {adminProducts.map((product) => (
            <AdminProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminProductsList;
