import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductCard from '../Products/ProductCard';
import './Favorites.css';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';

function FavoritesList(): JSX.Element {
  const favoritesList = useSelector(
    (store: RootState) => store.favorites.favorites
  );

  return (
    <div className="FavoriteList">
      <div className="FavoriteListMiddle">
        <NavbarMiddle />
        <div className="CardFullDiv">
          {favoritesList.map((favorite) => (
            <ProductCard
              product={favorite.Product}
              key={favorite.id}
              title={undefined}
              status="favorites"
            />
          ))}
        </div>
      
      </div>
    </div>
  );
}

export default FavoritesList;
