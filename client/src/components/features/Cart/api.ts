/* eslint-disable import/prefer-default-export */

import { DelItem, Message, OrderItemInc, UpdItem } from './type';

export const addCartFetch = async (prodId: number): Promise<OrderItemInc[]> => {
  const res = await fetch('/api/cart', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      product_id: prodId,
    }),
  });
  const data = await res.json();
  return data;
};

export const initCartFetch = async (): Promise<OrderItemInc[]> => {
  const res = await fetch('/api/cart');
  const data = await res.json();
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return data;
};

export const delOrderItemFetch = async (
  item: OrderItemInc
): Promise<DelItem> => {
  const res = await fetch(`/api/cart/${item.id}`, {
    method: 'delete',
  });
  const data = await res.json();
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return data;
};

export const updateOrderItemFetch = async (item: UpdItem): Promise<UpdItem> => {
  const res = await fetch(`/api/cart/${item.id}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      count: item.count,
    }),
  });
  const data = await res.json();
  return data;
};
export const sendOrderFetch = async (
  id: number
): Promise<{ message: string }> => {
  const res = await fetch(`/api/cart/${id}/close`, {
    method: 'put',
  });
  const data = await res.json();
  return data;
};
