import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Product } from './type';
import * as api from '../Cart/api';
import { useAppDispatch } from '../store/store';
// import { FavoriteProduct } from '../Favorites/type';
import { addFavorite } from '../Favorites/favoritesSlice';

function ProductCard({
  product,
  title,
}: {
  product: Product;
  title: string | undefined;
}): JSX.Element {
  // const [favorites, setFavorites] = useState<[]>([]);
  const dispatch = useAppDispatch();

  // const addCart = (product.id): void => {
  //   api.addCartFetch(product.id);
  // };

  const addFavorites = (): void => {
    dispatch(addFavorite(product.id));
  };

  return (
    <>
      <div>
        <button type="button" onClick={addFavorites}>
          Добавить в избранное
        </button>
      </div>
      <div className="foto">
        {title ? (
          <Link to={`/categories/${title}/${product.id}`}>
            <img src={product.Photos[0].url} alt="product" />
          </Link>
        ) : (
          <img src={product.Photos[0].url} alt="product" />
        )}
      </div>
      <div>
        <div>{product.title}</div>
        <div>{product.cost}</div>
        {/* <button type="button" onClick={addCart}>
          <img src="/cart.png" alt="cart" />
        </button> */}
      </div>
    </>
  );
}

export default ProductCard;
