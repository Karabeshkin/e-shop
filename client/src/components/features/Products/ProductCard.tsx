import React from 'react';
import { Product } from './type';

function ProductCard({ product }: { product: Product }): JSX.Element {
  return (
    <div className="foto">
      <img src={product.Photos[0].url} alt="product" />
      <div>{product.title}</div>
      <div>{product.cost}</div>
    </div>
  );
}

export default ProductCard;
