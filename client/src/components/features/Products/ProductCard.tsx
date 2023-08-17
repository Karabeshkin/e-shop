import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './type';
import { useAppDispatch } from '../store/store';
import { addFavorite, delFavorite } from '../Favorites/favoritesSlice';
import { addCartThunk } from '../Cart/cartSlice';
import './Product.css';

function ProductCard({
  product,
  title,
  status,
}: {
  product: Product;
  title: string | undefined;
  status: string;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const addFavorites = (): void => {
    dispatch(addFavorite(product.id));
  };

  const delFavoriteFunc = (): void => {
    dispatch(delFavorite(product.id));
  };

  const addCart = (): void => {
    dispatch(addCartThunk(product.id));
  };

  return (


   

    <div className='CardDiv'>


      <div className="foto">
        {title ? (
          <Link to={`/categories/${title}/${product.id}`}>
            <img src={product.Photos[0].url} alt="product" />
          </Link>
        ) : (
          <img src={product.Photos[0].url} alt="product" />
        )}
      </div>

      <div className="price">
        <div>{product.title}</div>
        <div>{`Цена: ${product.cost}`}</div>
        <div className='buttons'>
          <div className="productCard">
        <button  className='buttoncard' type="button" onClick={addCart}>
          <img src="/cart.png" alt="cart" />
        </button>
        </div>
        {status !== 'favorites' && (
          <div className="productCard">
            <button className='buttoncard' type="button" onClick={addFavorites}>
              <img src="/favoIcon.png" alt="favo pic" />
            </button>
          </div>
        )}
         </div>
        {status === 'favorites' && (
          <div>
            <button type="button" onClick={delFavoriteFunc}>
              Удалить из избранного
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
