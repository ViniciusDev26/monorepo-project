import { Product } from '../entities/Product';

export abstract class RegisterProductRepository {
  register: (product: Product) => Promise<void>;
}
