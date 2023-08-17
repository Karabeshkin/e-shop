import React, { useState } from 'react';
import { Product } from './type';
import { useAppDispatch } from '../store/store';
import { delProduct } from './adminSlice';
import AdminUpdateForm from './AdminUpdateForm';
import './Admin.css'

function AdminProductCard({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();
  const [update, setUpdate] = useState(true);
  const close = (): void => {
    setUpdate(true);
  };

  const delCard = (): void => {
    dispatch(delProduct({ product }));
  };

  return (
    <div className='NewProductAdmin'>
      {update ? (
        <>
          <div>{product.title}</div>
          <div className='CardImgAdmin'>
            <img src={product.Photos[0]?.url} alt="" />
          </div>
          <div>{product.cost}</div>
          <div>{product.Category.title}</div>
          <div>
            <button type="button" onClick={delCard}>
              x
            </button>
            <button type="button" onClick={() => setUpdate((prev) => !prev)}>
              upd
            </button>
          </div>
        </>
      ) : (
        <AdminUpdateForm product={product} close={close} />
      )}
    </div>
  );
}

export default AdminProductCard;
