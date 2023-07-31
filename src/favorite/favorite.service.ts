import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FavoriteDto } from './dto';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  async addFavorite(dto: FavoriteDto) {
    return this.prisma.favoriteAd.create({
      data: {
        advertisementID: dto.advertisementID,
        userID: dto.userID,
      },
    });
  }

  async deleteFavorite(dto: FavoriteDto) {
    return this.prisma.favoriteAd.delete({
      where: {
        userID_advertisementID: {
          advertisementID: dto.advertisementID,
          userID: dto.userID,
        },
      },
    });
  }
}
