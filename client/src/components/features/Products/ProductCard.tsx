import React from 'react';
import { Category, Product } from './type';
import { Link } from 'react-router-dom';

function ProductCard({ product }: { product: Product }): JSX.Element {
  return (
    <div>
      <img src={product.Photos[0].url} alt="product" />
      <div>{product.title}</div>
      <div>{product.cost}</div>
    </div>
  );
}

export default ProductCard;
