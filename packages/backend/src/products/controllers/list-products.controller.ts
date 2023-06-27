import { Controller, Get } from '@nestjs/common';
import { ListProductsService } from '../services/list-products.service';

@Controller('products')
export class ListProductsController {
  constructor(private readonly listProductsService: ListProductsService) {}

  @Get('/')
  async handle() {
    const product = await this.listProductsService.execute();

    return product.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
    }));
  }
}
