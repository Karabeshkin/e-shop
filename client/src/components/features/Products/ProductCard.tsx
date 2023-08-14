import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './type';
import * as api from '../Cart/api';

function ProductCard({
  product,
  title,
}: {
  product: Product;
  title: string | undefined;
}): JSX.Element {
  const addCart = (): void => {
    api.addCartFetch(product.id);
  };
  return (
    <div className="foto">
      <Link to={`/categories/${title}/${product.id}`}>
        <img src={product.Photos[0].url} alt="product" />
        <div>{product.title}</div>
        <div>{product.cost}</div>
      </Link>

      <button type="button" onClick={addCart}>
        <img
          src="https://img.icons8.com/?size=20&id=UXTY2trssuEM&format=png"
          alt="cart"
        />
      </button>
    </div>
  );
}

export default ProductCard;
