import { IsNotEmpty } from 'class-validator';
import { BillingPeriodEnum, RoomTypeEnum } from '@prisma/client';

export class RoomDto {
  ID: string;
  PropertyAdID: string;
  @IsNotEmpty()
  RoomType: RoomTypeEnum;
  @IsNotEmpty()
  RoomSize: number;
  @IsNotEmpty()
  Rent: number;
  @IsNotEmpty()
  Deposit: number;
  @IsNotEmpty()
  BillingPeriod: BillingPeriodEnum;
  @IsNotEmpty()
  IncludeBills: boolean;
  @IsNotEmpty()
  AttachBathroom: boolean;
}
