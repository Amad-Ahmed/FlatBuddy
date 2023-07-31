import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AmenitiesController } from './amenities.controller';
import { AmenitiesService } from './amenities.service';

@Module({
  controllers: [AmenitiesController],
  providers: [PrismaService, AmenitiesService],
})
export class AmenitiesModule {}
