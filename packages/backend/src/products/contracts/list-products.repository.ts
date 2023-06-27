import { Product } from '../entities/Product';

export abstract class ListProductsRepository {
  list: () => Promise<Product[]>;
}
