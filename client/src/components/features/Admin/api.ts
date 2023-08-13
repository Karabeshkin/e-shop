import { Product } from './type';

// eslint-disable-next-line import/prefer-default-export
export const initAdminProductFetch = async (): Promise<Product[]> => {
  const res = await fetch('admin/api/products');
  const data = await res.json();
  return data;
};
