import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositHistoryController } from './deposit-history.controller';
import { DepositController } from './deposit.controller';
import { Deposit } from './deposit.entity';
import { DepositService } from './deposit.service';

@Module({
  imports: [TypeOrmModule.forFeature([Deposit])],
  controllers: [DepositController, DepositHistoryController],
  providers: [DepositService],
})
export class DepositModule {}
