import { Body, Controller, Get, Injectable, Post, Put } from '@nestjs/common';
import { RoomDto } from './dto/index';
import { RoomService } from './room.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('rooms')
@ApiTags('rooms')
@Injectable()
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get('getAllRooms')
  async getAllRooms() {
    return await this.roomService.getAllRooms();
  }

  @Post('createRoom')
  async createRoom(@Body() roomDto: RoomDto) {
    return await this.roomService.createRoom(roomDto);
  }

  @Put('updateRoom')
  async updateRoom(@Body() roomDto: RoomDto) {
    return await this.roomService.updateRoom(roomDto);
  }

  //   @Delete(':id')
  //   async deleteBed({ id }: { id: number; }): Promise<void> {
  //     return await this.roomService.deleteBed(id);
  //   }
}
