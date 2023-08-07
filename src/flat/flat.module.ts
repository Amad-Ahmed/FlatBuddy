import { Module } from '@nestjs/common';
import { FlatController } from './flat.controller';
import { FlatService } from './flat.service';

@Module({
  controllers: [FlatController],
  providers: [FlatService],
})
export class FlatModule {}
