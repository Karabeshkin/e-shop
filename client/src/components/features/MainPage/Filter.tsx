import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../store/store';
import { useSelector } from 'react-redux';
import { productsInit } from '../Products/productsSlice';

function Filter(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.products.products);
  useEffect(() => {
    dispatch(productsInit());
  }, [dispatch]);
  return <div>
    <img src={products.}
  </div>;
}

export default Filter;
