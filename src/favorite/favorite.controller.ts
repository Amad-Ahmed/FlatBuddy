import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { FavoriteService } from './favorite.service';
import { FavoriteDto } from './dto';

@UseGuards(JwtGuard)
@Controller('favorite')
export class FavoriteController {
  constructor(
    private prismaService: PrismaService,
    private favoriteService: FavoriteService,
  ) {}

  //function to add a favorite on basis of advertisement id and user id
  @Post('addFavorite')
  async addFavorite(@GetUser() user: User, @Body() dto: FavoriteDto) {
    console.log('Create Favorite data');
    console.log(dto.advertisementID);
    console.log('Pre-existing User');
    console.log(user.ID);
    dto.userID = user.ID;
    return await this.favoriteService.addFavorite(dto);
  }

  // function to delete a favorite on basis of advertisement id and user id
  @Post('deleteFavorite')
  async deleteFavorite(@GetUser() user: User, @Body() dto: FavoriteDto) {
    console.log('Delete Favorite data');
    console.log(dto.advertisementID);
    console.log('Pre-existing User');
    console.log(user.ID);
    dto.userID = user.ID;
    return await this.favoriteService.deleteFavorite(dto);
  }
}
