export type Product = {
  id: number;
  title: string;
  cost: number;
  category_id: number;
  description: number;
};
export type State = {
  categories: Category[];
  error: string | undefined;
};

export type Photo = {
  id: number;
  product_id: number;
  url: string;
};

export type Category = {
  id: number;
  title: string;
  image: string;
};
