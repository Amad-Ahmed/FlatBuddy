import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FavoriteController } from './favorite.controller';
import { FavoriteService } from './favorite.service';

@Module({
  controllers: [FavoriteController],
  providers: [PrismaService, FavoriteService],
})
export class FavoriteModule {}
