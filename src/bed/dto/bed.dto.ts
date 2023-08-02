import { IsNotEmpty } from 'class-validator';
import { BedTypeEnum, BillingPeriodEnum } from '@prisma/client';

export class BedDto {
  ID: string;
  PropertyAdID: string;
  @IsNotEmpty()
  BedType: BedTypeEnum;
  @IsNotEmpty()
  Rent: number;
  @IsNotEmpty()
  Deposit: number;
  @IsNotEmpty()
  BillingPeriod: BillingPeriodEnum;
  @IsNotEmpty()
  IncludeBills: boolean;
}
