import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from './type';
import './Category.css';

function CategoryCard({ category }: { category: Category }): JSX.Element {
  return (
    <div className="categoryCard">
      <Link to={`/categories/${category.title}`}>
        <img src={category.image} alt="categoryImg" />
        <div className="NameCategory">{category.title}</div>
      </Link>
    </div>
  );
}

export default CategoryCard;

