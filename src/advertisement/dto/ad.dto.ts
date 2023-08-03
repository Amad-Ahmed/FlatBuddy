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
} from 'class-validator'; // Import the PreferenceDto class
import { AmenitiesDto } from 'src/amenities/dto';
import { AvailDaysDto } from 'src/availabledays/dto';
import { AvailTimesDto } from 'src/availabletimes/dto';
import { BedDto } from 'src/bed/dto';
import { HouseRulesDto } from 'src/houserules/dto';
import { PreferenceDto } from 'src/preference/dto';
import { RoomandBedDto } from 'src/roomandbed/dto';
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
  @IsString()
  AvailableFrom?: string;

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

  // Include PreferenceDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => PreferenceDto)
  Preference?: PreferenceDto;

  // Include SharedSpaceDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => SharedDto)
  SharedSpace?: SharedDto;

  // Include AvailDaysDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => AvailDaysDto)
  AvailableDays?: AvailDaysDto;

  //Include AmenitiesDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => AmenitiesDto)
  Amenities?: AmenitiesDto;

  //Include HouseRulesDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => HouseRulesDto)
  HouseRules?: HouseRulesDto;

  //Include AvailableTimesDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => AvailTimesDto)
  AvailableTimes?: AvailTimesDto;

  // Include an array of BedDto as a property
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => BedDto)
  Beds?: BedDto[];

  // Include BedandRoomDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => RoomandBedDto)
  RoomAndBed?: RoomandBedDto;
}
