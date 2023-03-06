import { Controller, Get } from '@nestjs/common';
import { PoolService } from './pool.service';

@Controller('pool')
export class PoolController {
  constructor(private poolService: PoolService) {}

  @Get()
  getPools() {
    return this.poolService.findAll(); //TODO don't return db id
  }
}
