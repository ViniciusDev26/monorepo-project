import { Injectable } from '@nestjs/common';
import { RegisterComboRepository } from 'src/products/contracts/register-combo.repository';
import { Combo } from 'src/products/entities/Combo';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class PrismaComboRepository implements RegisterComboRepository {
  constructor(private readonly prisma: PrismaService) {}

  async register(combo: Combo): Promise<void> {
    await this.prisma.combo.create({
      data: {
        id: combo.id,
        name: combo.name,
        price: combo.price,
        description: combo.description,
        ComboByProduct: {
          create: combo.products.map((product) => ({
            productId: product.id,
          })),
        },
      },
    });
  }
}
