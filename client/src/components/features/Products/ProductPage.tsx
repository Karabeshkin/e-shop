import React from 'react';
import { Product } from './type';
import { useNavigate, useParams } from 'react-router';
import { RootState, useAppDispatch } from '../store/store';
import { useSelector } from 'react-redux';

function ProductPage(): JSX.Element {
  const navigate = useNavigate();
  const { idProd } = useParams();
  const products = useSelector((store: RootState) => store.products.products);
  let product;
  if (idProd) {
    product = products.find((prod) => prod.id === +idProd);
  }

  return (
    <div>
      <img src={product?.Photos[0].url} alt="product" />
      <div>{product?.title}</div>
      <div>{product?.cost}</div>
      <div>{product?.description}</div>
      <button onClick={() => navigate(-1)} type="button">
        Назад
      </button>
    </div>
  );
}

export default ProductPage;
