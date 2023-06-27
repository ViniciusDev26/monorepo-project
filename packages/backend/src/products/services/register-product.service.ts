import { Injectable } from '@nestjs/common';
import { RegisterProductRepository } from '../contracts/register-product.repository';
import { Product } from '../entities/Product';

interface Image {
  filename: string;
  file: Buffer;
}

interface RegisterProductServiceParams {
  name: string;
  price: number;
  images: Image[];
}

@Injectable()
export class RegisterProductService {
  constructor(
    private readonly registerProductRepository: RegisterProductRepository,
  ) {}

  async execute(params: RegisterProductServiceParams) {
    const product = new Product(params);
    await this.registerProductRepository.register(product);

    return product;
  }
}
