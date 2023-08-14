import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { productsInit } from './productsSlice';
import ProductCard from './ProductCard';
import { RootState, useAppDispatch } from '../store/store';

function ProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.products.products);
  const { title } = useParams();

  useEffect(() => {
    if (title) {
      dispatch(productsInit(title));
    }
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <Link to={`/categories/${title}/${product.id}`}>
          <ProductCard product={product} key={product.id} />
        </Link>
      ))}
    </div>
  );
}

export default ProductsList;
