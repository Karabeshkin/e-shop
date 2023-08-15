export type OrderItem =
  | {
      id: number;
      product_id: number;
      order_id: number;
      count: number;
    }
  | undefined;
export type Order = {
  id: number;
  user_id: number;
  isFinished: boolean;
};
export type Message = {
  text: string;
};
