import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PreferenceDto {
  @IsString()
  ID: string;

  @IsString()
  PropertyAdID: string;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Student: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Professional: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  PetOwners: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  Family: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  Male: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  Female: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  Couple: boolean;
}
