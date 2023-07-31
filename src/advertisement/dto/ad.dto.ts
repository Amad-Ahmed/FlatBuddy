import { AdvertiserTypeEnum, PropertyTypeEnum } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class AdDto {
  @IsNotEmpty()
  @IsString()
  AdvertisementID: string;

  @IsNotEmpty()
  @IsEnum(PropertyTypeEnum)
  PropertyType: PropertyTypeEnum;

  @IsNotEmpty()
  @IsString()
  City: string;

  @IsNotEmpty()
  @IsString()
  Address: string;

  @IsNotEmpty()
  @IsString()
  Floor: string;

  @IsNotEmpty()
  @IsEnum(AdvertiserTypeEnum)
  AdvertiserType: AdvertiserTypeEnum;

  @IsOptional()
  AvailableFrom?: BigInt;

  @IsOptional()
  @IsInt()
  MinimumStayPeriod?: number;

  @IsOptional()
  @IsInt()
  MaximumStayPeriod?: number;

  @IsOptional()
  ScheduledCalls: boolean;

  @IsNotEmpty()
  @IsString()
  Title: string;

  @IsNotEmpty()
  @IsString()
  Description: string;

  @IsNotEmpty()
  @IsString()
  UserID: string;

  @IsOptional()
  Smoking: boolean;

  @IsOptional()
  Vegetarian: boolean;
}
