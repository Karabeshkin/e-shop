import { ProductInc } from '../Category/type';

export type OrderItem = {
  id: number;
  product_id: number;
  order_id: number;
  count: number;
};
export type Order = {
  id: number;
  user_id: number;
  isFinished: boolean;
};
export type Message = {
  text: string;
};

export type OrderItemInc = {
  id: number;
  product_id: number;
  order_id: number;
  count: number;
  Product: ProductInc;
};

export type State = {
  orderItems: OrderItemInc[];
  error: string | undefined;
};
export type UpdItem = {
  id: number;
  count: number;
};
export type DelItem = {
  id: string;
  message: string;
};
