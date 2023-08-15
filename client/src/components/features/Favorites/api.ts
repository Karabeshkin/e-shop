import { Product } from './type';

export const addFavoriteFetch = async ({
  product,
}: {
  product: Product;
}): Promise<Product> => {
  const res = await fetch('/api/favorites/', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(product.id),
  });
  const data = await res.json();
  return data;
};

export default addFavoriteFetch;
