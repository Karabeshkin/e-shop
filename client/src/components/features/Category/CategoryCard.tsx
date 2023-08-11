import React from 'react';
import { Category } from './type';
import { Link } from 'react-router-dom';

function CategoryCard({ category }: { category: Category }): JSX.Element {
  return (
    <div>
      <Link to={`/${category.title}`}>
        <div>{category.title}</div>
        <img src={category.image} alt="" />
      </Link>
    </div>
  );
}

export default CategoryCard;
