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
  Name: string;

  @IsEmail()
  @IsNotEmpty()
  Email: string;

  @IsNotEmpty()
  @IsString()
  Password: string;

  @IsInt()
  @IsOptional() // Make phone optional
  phone?: number;

  @IsOptional()
  gender?: string;

  @IsInt()
  @IsOptional() // Make age optional
  age?: number;
}
