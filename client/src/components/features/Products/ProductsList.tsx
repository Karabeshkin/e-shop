import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearState, productsInit } from './productsSlice';
import ProductCard from './ProductCard';
import { RootState, useAppDispatch } from '../store/store';
import './Product.css';
import SearchInput from './SearchInput';

function ProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.products.products);
  const { title } = useParams();

  const [matchedProducts, setMatchedProducts] = useState(products);

  const handleSearch: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    if (event.target.value) {
      const searchText = event.target.value;
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setMatchedProducts(result);
    }
  };

  useEffect(() => {
    if (title) {
      dispatch(productsInit(title));
      return () => {
        dispatch(clearState());
      };
    }
  }, [dispatch]);

  return (
    <div className="product">
      <SearchInput handleSearch={handleSearch} />
      {matchedProducts.map((product) => (
        <ProductCard product={product} title={title} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
