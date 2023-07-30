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
  phone?: number;

  @IsOptional()
  gender?: string;

  @IsInt()
  @IsOptional() // Make age optional
  age?: number;
}
