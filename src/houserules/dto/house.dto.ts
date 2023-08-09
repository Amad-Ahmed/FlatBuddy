import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class HouseRulesDto {
  ID: string;
  PropertyAdID: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true, default: 'No smoking' })
  HouseRules: string;
}
