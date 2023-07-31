import { Module } from '@nestjs/common';
import { AdvertisementController } from './advertisement.controller';
import { AdvertisementService } from './advertisement.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AdvertisementController],
  providers: [AdvertisementService, PrismaService],
})
export class AdvertisementModule {}
