import { IsNotEmpty } from 'class-validator';
import { BillingPeriodEnum, HouseTypeEnum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FlatDto {
  ID: string;
  PropertyAdID: string;

  @IsNotEmpty()
  @ApiProperty({ required: false, default: HouseTypeEnum.House })
  HouseType: HouseTypeEnum;

  @IsNotEmpty()
  @ApiProperty({ required: false, default: 2 })
  PropertySize: number;

  @IsNotEmpty()
  @ApiProperty({ required: false, default: 2 })
  Rent: number;

  @IsNotEmpty()
  @ApiProperty({ required: false, default: 2 })
  Deposit: number;

  @IsNotEmpty()
  @ApiProperty({ required: false, default: BillingPeriodEnum.Monthly })
  BillingPeriod: BillingPeriodEnum;

  @IsNotEmpty()
  @ApiProperty({ required: false, default: false })
  IncludeBills: boolean;
}
