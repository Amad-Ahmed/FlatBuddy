import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PreferenceController } from './preference.controller';
import { PreferenceService } from './preference.service';

@Module({
  controllers: [PreferenceController],
  providers: [PrismaService, PreferenceService],
})
export class PreferenceModule {}
