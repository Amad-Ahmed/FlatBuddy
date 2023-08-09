import { IsNotEmpty } from 'class-validator';
import { BillingPeriodEnum, RoomTypeEnum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FlatRoomDto {
  ID: string;
  PropertyAdID: string;

  @IsNotEmpty()
  @ApiProperty({ required: false, default: RoomTypeEnum.Single })
  RoomType: RoomTypeEnum;

  @IsNotEmpty()
  @ApiProperty({ required: false, default: true })
  AttachBathroom: boolean;
}
