import { Entity } from '../../core/entities/Entity';
import { Product } from './Product';

export interface ComboProps {
  name: string;
  description: string;
  price: number;
  products: Product[];
}

export class Combo extends Entity<ComboProps> {
  get name() {
    return this.props.name;
  }

  get price() {
    return this.props.price;
  }

  get description() {
    return this.props.description;
  }

  get products() {
    return this.props.products;
  }
}
