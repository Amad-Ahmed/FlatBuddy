import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PreferenceDto {
  @IsNotEmpty()
  @IsString()
  ID: string;

  @IsNotEmpty()
  @IsString()
  PropertyAdID: string;

  @IsOptional()
  Student: boolean;

  @IsOptional()
  Professional: boolean;

  @IsOptional()
  PetOwners: boolean;

  @IsOptional()
  Family: boolean;

  @IsOptional()
  Male: boolean;

  @IsOptional()
  Female: boolean;

  @IsOptional()
  Couple: boolean;
}
