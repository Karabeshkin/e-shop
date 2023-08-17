import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearState, productsInit, setSearchQuery, clearSearchQuery } from './productsSlice';
import ProductCard from './ProductCard';
import { RootState, useAppDispatch } from '../store/store';
import './Product.css';

function ProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.products.products);
  const searchQuery = useSelector(
    (store: RootState) => store.products.searchQuery
  );
  const { title } = useParams();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (title) {
      dispatch(productsInit(title));
      return () => {
        dispatch(clearState());
        setInputValue('');
      };
    }
  }, []);

  useEffect(() => {
    dispatch(clearSearchQuery())
  }, []);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchQuery(event.target.value));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='search1' >
      <div className='search'>
        <input
          type="text"
          onChange={handleSearch}
          value={inputValue}
          placeholder="искать на сайте"
          style={{ width: '200px' }}
        />
      </div>
      <div className="product">
        {filteredProducts.map((product) => (
          <ProductCard product={product} title={title} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
