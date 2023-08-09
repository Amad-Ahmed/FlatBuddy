import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class AmenitiesDto {
  ID: string;
  PropertyAdID: string;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Furnished: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Internet: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Parking: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  WashingMachine: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  SharedKitchen: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  LivingRoom: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Laundry: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  RooftopTerrace: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Garden: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  LoungeArea: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Electricity: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Water: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Heating: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  AirConditioned: boolean;
}
