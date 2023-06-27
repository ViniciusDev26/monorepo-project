import { RegisterProductRepository } from 'src/products/contracts/register-product.repository';
import { Product } from 'src/products/entities/Product';
import { PrismaService } from '../services/prisma.service';
import { Injectable } from '@nestjs/common';
import { ListProductsRepository } from 'src/products/contracts/list-products.repository';
import {
  GetProductsByIdsArrayRepository,
  GetProductsByIdsArrayRepositoryParams,
} from 'src/products/contracts/get-products-by-ids-array.repository';

@Injectable()
export class PrismaProductRepository
  implements
    RegisterProductRepository,
    ListProductsRepository,
    GetProductsByIdsArrayRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async list(): Promise<Product[]> {
    const productsRows = await this.prisma.product.findMany();

    return productsRows.map((productRow) => {
      return new Product(
        {
          name: productRow.name,
          price: productRow.price,
        },
        productRow.id,
      );
    });
  }

  async findByIds(
    params: GetProductsByIdsArrayRepositoryParams,
  ): Promise<Product[]> {
    const productsRows = await this.prisma.product.findMany({
      where: {
        id: {
          in: params.productsIds,
        },
      },
    });

    return productsRows.map(
      (productRow) =>
        new Product(
          {
            name: productRow.name,
            price: productRow.price,
          },
          productRow.id,
        ),
    );
  }

  async register(product: Product): Promise<void> {
    await this.prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    });
  }
}
