import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AvailDaysController } from './availdays.controller';
import { AvailDaysService } from './availdays.service';

@Module({
  controllers: [AvailDaysController],
  providers: [PrismaService, AvailDaysService],
})
export class AvailDaysModule {}
