import { IsString } from 'class-validator';

export class CreateDepositDto {
  @IsString()
  asset_address: string;

  @IsString()
  amount: string;

  @IsString()
  origin_address: string;
}
