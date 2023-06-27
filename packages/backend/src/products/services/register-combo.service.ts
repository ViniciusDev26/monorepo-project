import { Injectable } from '@nestjs/common';
import { GetProductsByIdsArrayRepository } from '../contracts/get-products-by-ids-array.repository';
import { RegisterComboRepository } from '../contracts/register-combo.repository';
import { Combo } from '../entities/Combo';

interface RegisterComboServiceParams {
  name: string;
  description: string;
  price: number;
  productsIds: string[];
}

@Injectable()
export class RegisterComboService {
  constructor(
    private readonly getProductsByIds: GetProductsByIdsArrayRepository,
    private readonly registerComboRepository: RegisterComboRepository,
  ) {}

  async execute(params: RegisterComboServiceParams) {
    const products = await this.getProductsByIds.findByIds(params);
    if (products.length !== params.productsIds.length) {
      throw new Error('Some products not found');
    }

    const combo = new Combo({
      name: params.name,
      description: params.description,
      price: params.price,
      products,
    });

    await this.registerComboRepository.register(combo);

    return combo;
  }
}
