import { IsNotEmpty } from 'class-validator';
import { BillingPeriodEnum, RoomTypeEnum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class RoomDto {
  ID: string;
  PropertyAdID: string;

  @IsNotEmpty()
  @ApiProperty({ required: true, default: RoomTypeEnum.Single })
  RoomType: RoomTypeEnum;

  @IsNotEmpty()
  @ApiProperty({ required: true, default: 15000 })
  RoomSize: number;

  @IsNotEmpty()
  @ApiProperty({ required: true, default: 5000 })
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

  @IsNotEmpty()
  @ApiProperty({ required: true, default: true })
  AttachBathroom: boolean;
}
