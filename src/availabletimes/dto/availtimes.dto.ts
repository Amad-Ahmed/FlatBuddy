import { IsNotEmpty, IsOptional } from 'class-validator';

export class AvailTimesDto {
  @IsNotEmpty()
  ID: string;
  @IsNotEmpty()
  PropertyAdID: string;

  @IsOptional()
  Morning: boolean;

  @IsOptional()
  Afternoon: boolean;

  @IsOptional()
  Evening: boolean;
}
