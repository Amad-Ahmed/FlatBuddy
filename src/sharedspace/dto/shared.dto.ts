import { IsNotEmpty, IsOptional } from 'class-validator';

export class SharedDto {
  ID: string;

  PropertyAdID: string;

  @IsOptional()
  Kitchen: boolean;

  @IsOptional()
  Bathroom: boolean;

  @IsOptional()
  LivingRoom: boolean;
}
