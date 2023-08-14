import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { RootState, useAppDispatch } from '../store/store';
import { oneProductInit } from './productsSlice';

function ProductPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { title, idProd } = useParams();
  const oneProduct = useSelector((store: RootState) => store.products.product);

  useEffect(() => {
    if (idProd && title) {
      dispatch(oneProductInit({ title, idProd }));
    }
  }, [dispatch]);

  return (
    <div>
      <img src={oneProduct?.Photos[0].url} alt="product" />
      <div>{oneProduct?.title}</div>
      <div>{oneProduct?.cost}</div>
      <div>{oneProduct?.description}</div>
      <button onClick={() => navigate(-1)} type="button">
        Назад
      </button>
    </div>
  );
}

export default ProductPage;
