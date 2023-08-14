import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearState, productsInit } from './productsSlice';
import ProductCard from './ProductCard';
import { RootState, useAppDispatch } from '../store/store';
import './Product.css';

function ProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.products.products);
  const { title } = useParams();

  useEffect(() => {
    if (title) {
      dispatch(productsInit(title));
      return () => {
        dispatch(clearState());
      };
    }
  }, [dispatch]);

  return (
    <div className="product">
      {products.map((product) => (
        <ProductCard product={product} title={title} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
