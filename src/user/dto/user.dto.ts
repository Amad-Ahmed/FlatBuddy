import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsInt()
  @IsOptional() // Make phone optional
  @ApiProperty({ required: false, default: 1234567890 })
  phone?: number;

  @IsOptional()
  @ApiProperty({ required: false, default: 'Male' })
  gender?: string;

  @IsInt()
  @IsOptional() // Make age optional
  age?: number;
}
