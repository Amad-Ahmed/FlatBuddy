import { IsNotEmpty } from 'class-validator';
import { BillingPeriodEnum, HouseTypeEnum } from '@prisma/client';

export class FlatDto {
  ID: string;
  PropertyAdID: string;
  @IsNotEmpty()
  HouseType: HouseTypeEnum;
  @IsNotEmpty()
  PropertySize: number;
  @IsNotEmpty()
  Rent: number;
  @IsNotEmpty()
  Deposit: number;
  @IsNotEmpty()
  BillingPeriod: BillingPeriodEnum;
  @IsNotEmpty()
  IncludeBills: boolean;
}
