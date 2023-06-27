import { Product } from '@prisma/client';

export class ProductViewModel {
  private static mountToHttp(product: Product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
  static toHttp(productResponse: Product | Product[]) {
    if (!Array.isArray(productResponse)) {
      return this.mountToHttp(productResponse);
    }

    return productResponse.map((product) => this.mountToHttp(product));
  }
}
