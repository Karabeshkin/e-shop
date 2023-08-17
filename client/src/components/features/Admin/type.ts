import { User } from '../Auth/type';

export type Product = {
  id: number;
  title: string;
  cost: number;
  category_id: number;
  description: string;
  Photos: Photo[];
  Category: Category;
};

export type Photo = {
  id: number;
  product_id: number;
  url: string;
};

export type Category = {
  id: number;
  title: string;
};

export type State = {
  products: Product[];
  categories: Category[];
  orders: OrderInc[];
  error: string | undefined;
};

export type DelCard = {
  id: string;
  message: string;
};

export type InitCategory = {
  categories: Category[];
  products: Product[];
};

export type AddProduct = {
  id?: number;
  name: string;
  cost: number;
  categoryId: number;
  description: string;
};
export type OrderInc =
  | {
      id: number;
      user_id: number;
      isFinished: boolean;
      User: User;
      OrderItems: [
        {
          id: number;
          product_id: number;
          order_id: number;
          count: number;
          Product: {
            id: number;
            title: string;
            cost: number;
            category_id: number;
            description: string;
          };
        }
      ];
    }

