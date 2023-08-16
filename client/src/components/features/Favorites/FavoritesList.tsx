
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { initFavorite } from './favoritesSlice';
import ProductCard from '../Products/ProductCard';

function FavoritesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesList = useSelector(
    (store: RootState) => store.favorites.favorites
  );
  console.log(favoritesList);

  useEffect(() => {
    dispatch(initFavorite());
  }, [dispatch]);
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
