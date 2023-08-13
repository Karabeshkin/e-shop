import React from 'react';
import { Product } from './type';

function AdminProductCard({ product }: { product: Product }): JSX.Element {
  return (
    <div>
      <div>{product.title}</div>
      <div>
        <img src={product.Photos[0].url} alt="" />
      </div>
      <div>{product.cost}</div>
      <div>{product.Category.title}</div>
    </div>
  );
}

export default AdminProductCard;
