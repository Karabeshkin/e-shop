export type Product = {
  id: number;
  title: string;
  cost: number;
  category_id: number;
  description: string;
  Photos: Photo[];
  Category: Category;
};
export type State = {
  products: Product[];
  product: Product | undefined;
  error: string | undefined;
  searchQuery: string,
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
