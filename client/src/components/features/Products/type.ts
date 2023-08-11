export type Product = {
  id: number;
  title: string;
  cost: number;
  category_id: number;
  description: number;
};
export type State = {
  products: Product[];
  error: string | undefined;
};
