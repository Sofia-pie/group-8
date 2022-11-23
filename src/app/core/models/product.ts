export interface Product {
  _id: number;
  image?: string;
  name: string;
  price: number;
  description?: string;
  additional?: string;
  amount: number;
  category: string;
  articul: string;
  weight: number;
  size: number;
  createdAt: Date;
}
