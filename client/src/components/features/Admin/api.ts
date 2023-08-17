import { DelCard, Product, InitCategory, AddProduct, OrderInc } from './type';

// eslint-disable-next-line import/prefer-default-export
export const initAdminProductFetch = async (): Promise<InitCategory> => {
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
  return data;
};

export const addAdminProductFetch = async (
  obj: AddProduct
): Promise<Product> => {
  const res = await fetch('admin/api/products', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};

export const updAdminProductFetch = async (
  obj: AddProduct
): Promise<Product> => {
  const res = await fetch('admin/api/products', {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};

export const initAdminOrderFetch = async (): Promise<OrderInc[]> => {
  const res = await fetch('/admin/api/products/orders');
  const data = await res.json();
  console.log(data,'fetch')
  return data;
};
