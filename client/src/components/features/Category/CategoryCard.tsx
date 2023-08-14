import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from './type';

function CategoryCard({ category }: { category: Category }): JSX.Element {
  return (
    <div className="categoryCardDiv">
      <div className="categoryCard">
        <Link to={`/categories/${category.title}`}>
          <img src={category.image} alt="categoryImg" />
          <div className="NameCategory">{category.title}</div>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
