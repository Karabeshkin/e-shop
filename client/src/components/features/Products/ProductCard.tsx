import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './type';
import { useAppDispatch } from '../store/store';
import { addFavorite } from '../Favorites/favoritesSlice';
import { addCartThunk } from '../Cart/cartSlice';
import './Product.css';

function ProductCard({
  product,
  title,
}: {
  product: Product;
  title: string | undefined;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const addFavorites = (): void => {
    dispatch(addFavorite(product.id));
  };

  const addCart = (): void => {
    dispatch(addCartThunk(product.id));
  };

  return (
    <>
    

      <div className="productCard">
        <div className="button">
          <button type="button" onClick={() => addFavorites()}>
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
        {title && (
          <>
            <div>{product.title}</div>
            <div>{product.cost}</div>
          </>
        )}
      </div>

        <div className="price">
          <div>{product.title}</div>
          <div>{product.cost}</div>
          <button className="buttonDob" type="button" onClick={addCart}>
            <img src="/cart.png" alt="cart" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
