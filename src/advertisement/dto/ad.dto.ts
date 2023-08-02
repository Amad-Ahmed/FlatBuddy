import { AdvertiserTypeEnum, PropertyTypeEnum } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AmenitiesDto } from 'src/amenities/dto';
import { AvailDaysDto } from 'src/availabledays/dto';
import { AvailTimesDto } from 'src/availabletimes/dto';
import { BedDto } from 'src/bed/dto';
import { HouseRulesDto } from 'src/houserules/dto';
import { PreferenceDto } from 'src/preference/dto';
import { SharedDto } from 'src/sharedspace/dto';

export class AdDto {
  @IsString()
  AdvertisementID: string;

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

  // Call PreferenceDto
  @ValidateNested()
  @Type(() => PreferenceDto)
  preferenceDto?: PreferenceDto;

  // Rest of the properties from your existing DTO
}
