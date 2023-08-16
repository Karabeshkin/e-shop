import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './type';
import * as api from '../Cart/api';
import { useAppDispatch } from '../store/store';
import { addCartThunk } from '../Cart/cartSlice';

function ProductCard({
  product,
  title,
}: {
  product: Product;
  title: string | undefined;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const addCart = (): void => {
    dispatch(addCartThunk(product.id));
  };

  const addToFavorites = (): void => {
    dispatch();
  };

  return (
    <>
      <div>
        <button type="button" onClick={() => addToFavorites(product.id)}>
          Добавить в избранное
        </button>
      </div>
      <div className="foto">
        <Link to={`/categories/${title}/${product.id}`}>
          <img src={product.Photos[0].url} alt="product" />
        </Link>
      </div>
      <div>
        <div>{product.title}</div>
        <div>{product.cost}</div>
        <button type="button" onClick={addCart}>
          <img src="/cart.png" alt="cart" />
        </button>
      </div>
    </>
  );
}

export default ProductCard;
