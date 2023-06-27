import { IsNumber, IsString } from 'class-validator';

export class RegisterComboDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString({ each: true })
  productsIds: string[];
}
