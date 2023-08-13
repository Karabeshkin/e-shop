/* eslint-disable import/prefer-default-export */
import { Product } from './type';

export const initProductsFetch = async (title: string): Promise<Product[]> => {
  const res = await fetch(`/api/categories/${title}`);
  const data = await res.json();
  return data;
};
