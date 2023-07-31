import { IsNotEmpty, IsOptional } from 'class-validator';

export class SharedDto {
  @IsNotEmpty()
  ID: string;

  @IsNotEmpty()
  PropertyAdID: string;

  @IsOptional()
  Kitchen: boolean;

  @IsOptional()
  Bathroom: boolean;

  @IsOptional()
  LivingRoom: boolean;
}
