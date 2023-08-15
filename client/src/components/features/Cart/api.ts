/* eslint-disable import/prefer-default-export */
import { Message, OrderItem } from './type';

export const addCartFetch = async (prodId: number): Promise<Message> => {
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

export const initCartFetch = async (): Promise<OrderItem[]> => {
  const res = await fetch('/api/cart');
  const data = await res.json();
  return data;
};
