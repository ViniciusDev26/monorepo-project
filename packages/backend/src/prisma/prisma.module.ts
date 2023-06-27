import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { PrismaProductRepository } from './repositories/prisma-product.repository';
import { RegisterProductRepository } from 'src/products/contracts/register-product.repository';
import { ListProductsRepository } from 'src/products/contracts/list-products.repository';
import { GetProductsByIdsArrayRepository } from 'src/products/contracts/get-products-by-ids-array.repository';
import { RegisterComboRepository } from 'src/products/contracts/register-combo.repository';
import { PrismaComboRepository } from './repositories/prisma-combo.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: RegisterProductRepository,
      useClass: PrismaProductRepository,
    },
    {
      provide: ListProductsRepository,
      useClass: PrismaProductRepository,
    },
    {
      provide: GetProductsByIdsArrayRepository,
      useClass: PrismaProductRepository,
    },
    {
      provide: RegisterComboRepository,
      useClass: PrismaComboRepository,
    },
  ],
  exports: [
    PrismaService,
    RegisterProductRepository,
    ListProductsRepository,
    GetProductsByIdsArrayRepository,
    RegisterComboRepository,
  ],
})
export class PrismaModule {}
