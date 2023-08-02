import { IsNotEmpty, IsOptional } from 'class-validator';

export class AmenitiesDto {
  ID: string;
  PropertyAdID: string;

  @IsOptional()
  Furnished: boolean;
  @IsOptional()
  Internet: boolean;
  @IsOptional()
  Parking: boolean;
  @IsOptional()
  WashingMachine: boolean;
  @IsOptional()
  SharedKitchen: boolean;
  @IsOptional()
  LivingRoom: boolean;
  @IsOptional()
  Laundry: boolean;
  @IsOptional()
  RooftopTerrace: boolean;
  @IsOptional()
  Garden: boolean;
  LoungeArea: boolean;
  @IsOptional()
  Electricity: boolean;
  @IsOptional()
  Water: boolean;
  @IsOptional()
  Heating: boolean;
  @IsOptional()
  AirConditioned: boolean;
}
