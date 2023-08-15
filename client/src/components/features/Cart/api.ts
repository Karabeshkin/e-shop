/* eslint-disable import/prefer-default-export */
import { DelCard } from '../Admin/type';
import { Message, OrderItemInc } from './type';

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

export const initCartFetch = async (): Promise<OrderItemInc[]> => {
  const res = await fetch('/api/cart');
  const data = await res.json();
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return data;
};

export const delOrderItemFetch = async ({
  item,
}: {
  item: OrderItemInc;
}): Promise<DelCard> => {
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
