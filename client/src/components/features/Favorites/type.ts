import { Product } from '../Products/type';

export type State = {
  favorites: FavoriteProduct[];
  error: string | undefined;
};

export type FavoriteProduct = {
  id: number;
  user_id: number;
  product_id: number;
  Product: Product;
};
