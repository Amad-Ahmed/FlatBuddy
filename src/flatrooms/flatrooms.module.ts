import { Module } from '@nestjs/common';
import { FlatRoomController } from './flatrooms.controller';
import { FlatRoomService } from './flatrooms.service';

@Module({
  controllers: [FlatRoomController],
  providers: [FlatRoomService],
})
export class FlatRoomModule {}
