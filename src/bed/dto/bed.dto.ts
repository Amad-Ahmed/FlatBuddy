import { IsNotEmpty } from 'class-validator';
import { BedTypeEnum, BillingPeriodEnum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BedDto {
  ID: string;
  PropertyAdID: string;

  @IsNotEmpty()
  @ApiProperty({ required: true, default: BedTypeEnum.Single })
  BedType: BedTypeEnum;

  @IsNotEmpty()
  @ApiProperty({ required: true, default: 15000 })
  Rent: number;

  @IsNotEmpty()
  @ApiProperty({ required: true, default: 5000 })
  Deposit: number;

  @IsNotEmpty()
  @ApiProperty({ required: true, default: BillingPeriodEnum.Weekly })
  BillingPeriod: BillingPeriodEnum;

  @IsNotEmpty()
  @ApiProperty({ required: true, default: true })
  IncludeBills: boolean;
}
