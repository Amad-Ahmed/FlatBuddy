import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class AvailTimesDto {
  ID: string;
  PropertyAdID: string;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Morning: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Afternoon: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Evening: boolean;
}
