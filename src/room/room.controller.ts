import {
  Body,
  Controller,
  Get,
  Injectable,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RoomDto } from './dto/index';
import { RoomService } from './room.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';

@Controller('rooms')
@ApiTags('rooms')
@UseGuards(JwtGuard)
@ApiBearerAuth()
// @Injectable()
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
