import React from 'react';
import { Product } from './type';
import { useAppDispatch } from '../store/store';
import { delProduct } from './adminSlice';

function AdminProductCard({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();

  const delCard = (): void => {
    dispatch(delProduct({ product }));
  };

  return (
    <div>
      <div>{product.title}</div>
      <div>
        <img src={product.Photos[0]?.url} alt="" />
      </div>
      <div>{product.cost}</div>
      <div>{product.Category.title}</div>
      <div>
        <button type="button" onClick={delCard}>
          x
        </button>
      </div>
    </div>
  );
}

export default AdminProductCard;
