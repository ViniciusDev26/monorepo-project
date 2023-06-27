import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RegisterProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  price: number;
}
