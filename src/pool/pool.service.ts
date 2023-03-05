import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pool } from './pool.entity';

@Injectable()
export class PoolService {
  constructor(
    @InjectRepository(Pool)
    private usersRepository: Repository<Pool>,
  ) {}

  findAll(): Promise<Pool[]> {
    return this.usersRepository.find();
  }
}
