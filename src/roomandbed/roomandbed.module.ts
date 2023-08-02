import { Module } from '@nestjs/common';
import { RoomandbedService } from './roomandbed.service';
import { RoomandbedController } from './roomandbed.controller';

@Module({
  providers: [RoomandbedService],
  controllers: [RoomandbedController],
})
export class RoomandbedModule {}
