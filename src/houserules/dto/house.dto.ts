import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class HouseRulesDto {
  ID: string;
  PropertyAdID: string;

  @IsNotEmpty()
  @IsString()
  HouseRules: string;
}
