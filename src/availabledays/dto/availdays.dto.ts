import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class AvailDaysDto {
  ID: string;
  PropertyAdID: string;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Monday: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Tuesday: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Wednesday: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Thursday: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Friday: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Saturday: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Sunday: boolean;
}
