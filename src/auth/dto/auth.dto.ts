import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
} from 'class-validator';

export class AuthDto {
  // @IsNotEmpty()
  @IsOptional()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, default: 'John Doe' })
  Name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ required: true, default: 'john@gmail.com' })
  Email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true, default: '123456' })
  Password: string;

  @IsInt()
  @IsOptional() // Make phone optional
  @ApiProperty({ required: false, default: 1234567890 })
  phone?: number;

  @IsOptional()
  @ApiProperty({ required: false, default: 'Male' })
  gender?: string;

  @IsInt()
  @IsOptional() // Make age optional
  @ApiProperty({ required: false, default: 20 })
  age?: number;
}
