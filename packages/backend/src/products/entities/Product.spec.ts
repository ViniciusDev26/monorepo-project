import { Product } from './Product';

describe('Product', () => {
  it('should be able to create a new product', () => {
    const product = new Product({
      name: 'Product 1',
      price: 100,
    });

    expect(product).toBeInstanceOf(Product);
    expect(product.id).toBeDefined();
    expect(product.name).toBe('Product 1');
    expect(product.price).toBe(100);
  });
});
