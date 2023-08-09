import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BedTypeEnum, BillingPeriodEnum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class RoomandBedDto {
  ID: string;

  PropertyAdID: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  TotalBedsRooms: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  AvailableBedsRooms: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  NumberOfMales: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  NumberOfFemales: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  MinAge: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  MaxAge: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  PrefMinAge: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  PrefMaxAge: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, default: 'Male' })
  PrefGender: string;
}
