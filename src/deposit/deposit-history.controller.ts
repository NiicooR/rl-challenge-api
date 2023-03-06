import { Controller, Get, Query } from '@nestjs/common';
import { DepositService } from './deposit.service';

@Controller('deposit-history')
export class DepositHistoryController {
  constructor(private depositService: DepositService) {}

  @Get('deposit-history')
  getHistory(@Query('tag') tag: string) {
    return this.depositService.findAll(tag);
  }
}
