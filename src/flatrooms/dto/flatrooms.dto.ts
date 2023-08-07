import { IsNotEmpty } from 'class-validator';
import { BillingPeriodEnum, RoomTypeEnum } from '@prisma/client';

export class FlatRoomDto {
  ID: string;
  PropertyAdID: string;
  @IsNotEmpty()
  RoomType: RoomTypeEnum;
  @IsNotEmpty()
  AttachBathroom: boolean;
}
