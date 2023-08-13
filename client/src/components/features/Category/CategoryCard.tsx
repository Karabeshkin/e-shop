import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from './type';

function CategoryCard({ category }: { category: Category }): JSX.Element {
  return (
    <div>
      <Link to={`/categories/${category.title}`}>
        <div>{category.title}</div>
        <img src={category.image} alt="categoryImg" />
      </Link>
    </div>
  );
}

export default CategoryCard;
