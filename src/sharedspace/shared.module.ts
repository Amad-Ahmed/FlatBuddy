import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SharedController } from './shared.controller';
import { SharedService } from './shared.service';

@Module({
  controllers: [SharedController],
  providers: [PrismaService, SharedService],
})
export class SharedModule {}
