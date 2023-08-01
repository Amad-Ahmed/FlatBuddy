import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HouseRulesController } from './house.controller';
import { HouseRulesService } from './house.service';

@Module({
  controllers: [HouseRulesController],
  providers: [PrismaService, HouseRulesService],
})
export class HouseRulesModule {}
