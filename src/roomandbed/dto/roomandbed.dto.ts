import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BedTypeEnum, BillingPeriodEnum } from '@prisma/client';

export class RoomandBedDto {
  ID: string;

  PropertyAdID: string;

  @IsOptional()
  @IsInt()
  TotalBedsRooms: number;

  @IsOptional()
  @IsInt()
  AvailableBedsRooms: number;

  @IsOptional()
  @IsInt()
  NumberOfMales: number;

  @IsOptional()
  @IsInt()
  NumberOfFemales: number;

  @IsOptional()
  @IsInt()
  MinAge: number;

  @IsOptional()
  @IsInt()
  MaxAge: number;

  @IsOptional()
  @IsInt()
  PrefMinAge: number;

  @IsOptional()
  @IsInt()
  PrefMaxAge: number;

  @IsOptional()
  @IsString()
  PrefGender: string;
}
