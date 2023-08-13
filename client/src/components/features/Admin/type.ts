export type Product = {
  id: number;
  title: string;
  cost: number;
  category_id: number;
  description: number;
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
  error: string | undefined;
};
