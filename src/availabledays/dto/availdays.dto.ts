import { IsNotEmpty, IsOptional } from 'class-validator';

export class AvailDaysDto {
  @IsNotEmpty()
  ID: string;
  @IsNotEmpty()
  PropertyAdID: string;

  @IsOptional()
  Monday: boolean;

  @IsOptional()
  Tuesday: boolean;

  @IsOptional()
  Wednesday: boolean;

  @IsOptional()
  Thursday: boolean;

  @IsOptional()
  Friday: boolean;

  @IsOptional()
  Saturday: boolean;

  @IsOptional()
  Sunday: boolean;
}
