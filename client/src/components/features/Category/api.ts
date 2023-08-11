/* eslint-disable import/prefer-default-export */
import { Category } from './type';

export const initCategoriesFetch = async (): Promise<Category[]> => {
  const res = await fetch('/api/categories');
  const data = await res.json();
  return data;
};
