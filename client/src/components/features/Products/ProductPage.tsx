import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { RootState, useAppDispatch } from '../store/store';
import { oneProductInit } from './productsSlice';
import './Product.css';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';

function ProductPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { title, idProd } = useParams();
  const oneProduct = useSelector((store: RootState) => store.products.product);

  useEffect(() => {
    if (idProd && title) {
      dispatch(oneProductInit({ title, idProd }));
      return () => {};
    }
  }, [dispatch]);

  return (
    <div className="CardPageOne">
      <div className="CardMiddle">
        <NavbarMiddle />
        <div className="CardPageImg">
          <div className="CardPageImgOne">
            <img src={oneProduct?.Photos[0].url} alt="product" />
          </div>
          <div className="CardPageList">
            <div>{`Наименование: ${oneProduct?.title}`}</div> 
            <div>{`Цена: ${oneProduct?.cost}`}</div> 
            <div>{`Описание: ${oneProduct?.description}`}</div>
          </div>
          <div className="buttonBack">
            <button onClick={() => navigate(-1)} type="button">
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
