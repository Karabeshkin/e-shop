import { log } from 'console';
import { DelCard, Product } from './type';

// eslint-disable-next-line import/prefer-default-export
export const initAdminProductFetch = async (): Promise<Product[]> => {
  const res = await fetch('admin/api/products');
  const data = await res.json();
  return data;
};

export const delAdminProductFetch = async ({
  product,
}: {
  product: Product;
}): Promise<DelCard> => {
  const res = await fetch(`admin/api/products/${product.id}`, {
    method: 'delete',
  });
  const data = await res.json();
  console.log(data);

  return data;
};
