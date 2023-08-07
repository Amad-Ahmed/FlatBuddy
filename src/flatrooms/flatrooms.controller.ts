import { Body, Controller, Get, Injectable, Post, Put } from '@nestjs/common';
import { FlatRoomDto } from './dto/index';
import { FlatRoomService } from './flatrooms.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('flatrooms')
@ApiTags('flatRooms')
@Injectable()
export class FlatRoomController {
  constructor(private readonly flatRoomService: FlatRoomService) {}

  @Get('getAllFlatRooms')
  async getAllFlatRooms() {
    return await this.flatRoomService.getAllflatRooms();
  }

  @Post('createFlatRoom')
  async createBed(@Body() flatRoomDto: FlatRoomDto) {
    return await this.flatRoomService.createflatRooms(flatRoomDto);
  }

  @Put('updateFlatRoom')
  async updateFlatRoom(@Body() flatRoomDto: FlatRoomDto) {
    return await this.flatRoomService.updateflatRooms(flatRoomDto);
  }

  //   @Delete(':id')
  //   async deleteBed({ id }: { id: number; }): Promise<void> {
  //     return await this.flatRoomService.deleteFgetAllflatRoomsid);
  //   }
}
