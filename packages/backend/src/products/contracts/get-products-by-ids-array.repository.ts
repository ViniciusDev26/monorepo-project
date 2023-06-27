import { Product } from '../entities/Product';

export interface GetProductsByIdsArrayRepositoryParams {
  productsIds: string[];
}

export abstract class GetProductsByIdsArrayRepository {
  findByIds: (
    params: GetProductsByIdsArrayRepositoryParams,
  ) => Promise<Product[]>;
}
