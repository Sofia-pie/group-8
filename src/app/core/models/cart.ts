import { Product } from './product';

export class CartItem {
  public product: Product = {
    _id: 0,
    name: '',
    price: 0,
    amount: 0,
    category: '',
    createdAt: new Date(),
  };
  public quantity: number = 0;
}
