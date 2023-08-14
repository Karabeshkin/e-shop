import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { productsInit } from './productsSlice';
import ProductCard from './ProductCard';

function ProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.categories.);
  useEffect(() => {
    dispatch(productsInit());
  }, [dispatch]);

  return (
    <div> 
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
