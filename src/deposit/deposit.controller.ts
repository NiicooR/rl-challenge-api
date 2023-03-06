import { Body, Controller, Post } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { CreateDepositDto } from './dto/createDeposit.dto';

@Controller('deposit')
export class DepositController {
  constructor(private depositService: DepositService) {}

  @Post()
  create(@Body() createDepositDto: CreateDepositDto) {
    return this.depositService.create(createDepositDto);
  }
}
