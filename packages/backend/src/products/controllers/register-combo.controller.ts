import { Body, Controller, Post } from '@nestjs/common';
import { RegisterComboDTO } from '../dtos/register-combo.dto';
import { RegisterComboService } from '../services/register-combo.service';

@Controller('combos')
export class RegisterComboController {
  constructor(private readonly registerComboService: RegisterComboService) {}
  @Post('/')
  async handle(@Body() body: RegisterComboDTO) {
    const response = await this.registerComboService.execute(body);

    return response;
  }
}
