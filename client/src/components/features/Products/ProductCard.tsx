import React from 'react';
import { Product } from './type';

function ProductCard({ product }: { product: Product }): JSX.Element {
  return (
    <div>
      <img src={product.description} alt="product" />
      <div>{product.title}</div>
      <div>{product.cost}</div>
    </div>
  );
}

export default ProductCard;
