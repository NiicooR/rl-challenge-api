import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deposit } from './deposit.entity';
import { CreateDepositDto } from './dto/createDeposit.dto';

@Injectable()
export class DepositService {
  constructor(
    @InjectRepository(Deposit)
    private depositRepository: Repository<Deposit>,
  ) {}

  findAll(): Promise<Deposit[]> {
    return this.depositRepository.find();
  }

  create(depositDto: CreateDepositDto) {
    return this.depositRepository.save(depositDto);
  }
}
