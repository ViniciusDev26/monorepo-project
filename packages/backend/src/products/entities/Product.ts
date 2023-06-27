import { Entity } from '../../core/entities/Entity';

export interface ProductProps {
  name: string;
  price: number;
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name;
  }

  get price() {
    return this.props.price;
  }
}
