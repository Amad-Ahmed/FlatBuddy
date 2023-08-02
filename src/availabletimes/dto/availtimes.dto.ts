import { IsNotEmpty, IsOptional } from 'class-validator';

export class AvailTimesDto {
  ID: string;
  PropertyAdID: string;

  @IsOptional()
  Morning: boolean;

  @IsOptional()
  Afternoon: boolean;

  @IsOptional()
  Evening: boolean;
}
