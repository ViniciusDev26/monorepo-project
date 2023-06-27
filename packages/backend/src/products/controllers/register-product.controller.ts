import { Body, Controller, Post } from '@nestjs/common';
import { RegisterProductDTO } from '../dtos/register-product.dto';
import { RegisterProductService } from '../services/register-product.service';
import { ProductViewModel } from '../view-models/product.view-model';

@Controller('products')
export class RegisterProductController {
  constructor(
    private readonly registerProductService: RegisterProductService,
  ) {}

  @Post('/')
  async handle(@Body() params: RegisterProductDTO) {
    const product = await this.registerProductService.execute({
      name: params.name,
      price: params.price,
      images: [],
    });

    return ProductViewModel.toHttp(product);
  }
}
