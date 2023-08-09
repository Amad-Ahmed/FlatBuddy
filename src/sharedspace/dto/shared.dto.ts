import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class SharedDto {
  ID: string;

  PropertyAdID: string;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  Kitchen: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  Bathroom: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  LivingRoom: boolean;
}
