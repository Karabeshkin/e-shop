import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { productsInit } from './productsSlice';
import ProductCard from './ProductCard';
import { RootState, useAppDispatch } from '../store/store';

function ProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.products.products);
  const { title } = useParams();
  console.log(products,'000000000');
  useEffect(() => {
    if (title) {
      dispatch(productsInit(title));
    }
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
