import { Module } from '@nestjs/common';
import { RegisterProductController } from './controllers/register-product.controller';
import { RegisterProductService } from './services/register-product.service';
import { ListProductsController } from './controllers/list-products.controller';
import { ListProductsService } from './services/list-products.service';
import { RegisterComboService } from './services/register-combo.service';
import { RegisterComboController } from './controllers/register-combo.controller';

@Module({
  providers: [
    RegisterProductService,
    ListProductsService,
    RegisterComboService,
  ],
  controllers: [
    RegisterProductController,
    ListProductsController,
    RegisterComboController,
  ],
})
export class ProductsModule {}
