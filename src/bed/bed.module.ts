import { Module } from '@nestjs/common';
import { BedController } from './bed.controller';
import { BedService } from './bed.service';

@Module({
  controllers: [BedController],
  providers: [BedService]
})
export class BedModule {}
