import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Product } from './type';
import { useAppDispatch } from '../store/store';

// import { FavoriteProduct } from '../Favorites/type';
import { addFavorite } from '../Favorites/favoritesSlice';

import './Product.css';
import { addCartThunk } from '../Cart/cartSlice';



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

  const addCart = (): void => {
    dispatch(addCartThunk(product.id));
  };

  const addToFavorites = (): void => {
    dispatch();

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

<!--       <div className='productCard'>
        <button type="button" onClick={() => addToFavorites(product.id)}>
          Добавить в избранное
        </button>

        <div className="foto">
          <Link to={`/categories/${title}/${product.id}`}>
            <img src={product.Photos[0].url} alt="product" />
          </Link>
        </div>
        <div className='price'>
          <div>{product.title}</div>
          <div>{product.cost}</div>
          <button className='buttonDob' type="button" onClick={addCart}>
            <img src="/cart.png" alt="cart" />
          </button>
        </div> -->

      </div>
    </>
  );
}

export default ProductCard;
