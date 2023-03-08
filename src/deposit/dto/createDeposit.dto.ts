import { IsString } from 'class-validator';

export class CreateDepositDto {
  @IsString()
  assetAddress: string;

  @IsString()
  amount: string;

  @IsString()
  originAddress: string;

  @IsString()
  tag: string;
}
