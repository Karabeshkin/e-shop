import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { categoriesInit } from './categorySlice';
import CategoryCard from './CategoryCard';
import './Category.css';

function CategoryList(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useSelector(
    (store: RootState) => store.categories.categories
  );
  useEffect(() => {
    dispatch(categoriesInit());
  }, [dispatch]);
  return (
    <div className="category">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoryList;
