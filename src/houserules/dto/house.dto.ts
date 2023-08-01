import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class HouseRulesDto {
  @IsNotEmpty()
  ID: string;
  @IsNotEmpty()
  PropertyAdID: string;

  @IsNotEmpty()
  @IsString()
  HouseRules: string;
}
