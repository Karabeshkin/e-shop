import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearState, productsInit, setSearchQuery } from './productsSlice';
import ProductCard from './ProductCard';
import { RootState, useAppDispatch } from '../store/store';
import './Product.css';

function ProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.products.products);
  const searchQuery = useSelector((store: RootState) => store.products.searchQuery);
  const { title } = useParams();

  useEffect(() => {
    if (title) {
      dispatch(productsInit(title));
      return () => {
        dispatch(clearState());
      };
    }
  }, [dispatch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const filteredProducts = products.filter((product) =>
  product.title.includes(searchQuery)
);

  return (

    <div className="product">
      <input type="text" onChange={handleSearch} value={searchQuery} />
      {filteredProducts.map((product) => (
        <ProductCard product={product} title={title} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
