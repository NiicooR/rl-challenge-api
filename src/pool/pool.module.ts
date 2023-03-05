import { Module } from '@nestjs/common';
import { PoolController } from './pool.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoolService } from './pool.service';
import { Pool } from './pool.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pool])],
  controllers: [PoolController],
  providers: [PoolService],
})
export class PoolModule {}
