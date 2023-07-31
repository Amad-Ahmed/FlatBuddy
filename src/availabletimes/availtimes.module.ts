import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AvailTimesController } from './availtimes.controller';
import { AvailTimesService } from './availtimes.service';

@Module({
  controllers: [AvailTimesController],
  providers: [PrismaService, AvailTimesService],
})
export class AvailTimesModule {}
