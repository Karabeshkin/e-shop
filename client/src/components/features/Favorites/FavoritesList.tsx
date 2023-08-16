import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductCard from '../Products/ProductCard';

function FavoritesList(): JSX.Element {
  const favoritesList = useSelector(
    (store: RootState) => store.favorites.favorites
  );

  return (
    <div>
      {favoritesList.map((favorite) => (
        <ProductCard
          product={favorite.Product}
          key={favorite.id}
          title={undefined}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
