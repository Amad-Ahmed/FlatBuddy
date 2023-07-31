import { IsNotEmpty } from 'class-validator';

export class FavoriteDto {
  @IsNotEmpty()
  advertisementID: string;

  @IsNotEmpty()
  userID: string;
}
