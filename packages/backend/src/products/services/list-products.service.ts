import { Injectable } from '@nestjs/common';
import { ListProductsRepository } from '../contracts/list-products.repository';

@Injectable()
export class ListProductsService {
  constructor(private readonly listProductRepository: ListProductsRepository) {}

  async execute() {
    const products = await this.listProductRepository.list();

    return products;
  }
}
