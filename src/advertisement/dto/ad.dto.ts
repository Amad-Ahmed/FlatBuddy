import { ApiProperty } from '@nestjs/swagger';
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
import { FlatDto } from 'src/flat/dto';
import { FlatRoomDto } from 'src/flatrooms/dto';
import { HouseRulesDto } from 'src/houserules/dto';
import { PreferenceDto } from 'src/preference/dto';
import { RoomDto } from 'src/room/dto';
import { RoomandBedDto } from 'src/roomandbed/dto';
import { SharedDto } from 'src/sharedspace/dto';

export class AdDto {
  @IsString()
  AdvertisementID: string;

  @IsEnum(PropertyTypeEnum)
  @ApiProperty({ enum: PropertyTypeEnum })
  PropertyType: PropertyTypeEnum;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true, default: 'Islamabad' })
  City: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true, default: 'House no.21 St.18' })
  Address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true, default: '2nd floor' })
  Floor: string;

  @IsNotEmpty()
  @IsEnum(AdvertiserTypeEnum)
  @ApiProperty({ enum: AdvertiserTypeEnum })
  AdvertiserType: AdvertiserTypeEnum;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, default: '1679109862000' })
  AvailableFrom?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  MinimumStayPeriod?: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, default: 1 })
  MaximumStayPeriod?: number;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  ScheduledCalls: boolean;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true, default: 'For Rent' })
  Title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true, default: 'This is a description' })
  Description: string;

  @IsNotEmpty()
  @IsString()
  UserID: string;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  Smoking: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  Vegetarian: boolean;

  // Include PreferenceDto as a property
  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => PreferenceDto)
  Preference?: PreferenceDto;

  // Include SharedSpaceDto as a property
  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => SharedDto)
  SharedSpace?: SharedDto;

  // Include AvailDaysDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => AvailDaysDto)
  @ApiProperty({ required: false })
  AvailableDays?: AvailDaysDto;

  //Include AmenitiesDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => AmenitiesDto)
  @ApiProperty({ required: false })
  Amenities?: AmenitiesDto;

  //Include HouseRulesDto as a property
  // @IsOptional()
  // @ValidateNested()
  // @Type(() => HouseRulesDto)
  // HouseRules?: HouseRulesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => HouseRulesDto)
  @ApiProperty({ required: false })
  HouseRules?: HouseRulesDto;

  //Include AvailableTimesDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => AvailTimesDto)
  @ApiProperty({ required: false })
  AvailableTimes?: AvailTimesDto;

  // Include an array of BedDto as a property
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => BedDto)
  @ApiProperty({ required: false, type: [BedDto] })
  Beds?: BedDto[];

  // Include BedandRoomDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => RoomandBedDto)
  @ApiProperty({ required: false })
  RoomAndBed?: RoomandBedDto;

  // Include RoomDto as a property
  @IsOptional()
  @ValidateNested({ each: true }) // made validate nested true
  @Type(() => RoomDto)
  @ApiProperty({ required: false, type: [RoomDto] })
  Rooms?: RoomDto[];

  // Include FlatDto as a property
  @IsOptional()
  @ValidateNested()
  @Type(() => FlatDto)
  @ApiProperty({ required: false })
  Flats?: FlatDto;

  // Include an array of FlatRoomDto as a property
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => FlatRoomDto)
  @ApiProperty({ required: false, type: [FlatRoomDto] })
  FlatRooms?: FlatRoomDto[];
}
