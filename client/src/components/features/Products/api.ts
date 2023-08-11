/* eslint-disable import/prefer-default-export */
import { Product } from './type';

export const initProductsFetch = async (): Promise<Product[]> => {
  const res = await fetch('api/products');
  const data = await res.json();
  return data;
};
