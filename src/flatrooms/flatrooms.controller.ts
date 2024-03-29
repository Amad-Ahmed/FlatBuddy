import {
  Body,
  Controller,
  Get,
  Injectable,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { FlatRoomDto } from './dto/index';
import { FlatRoomService } from './flatrooms.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';

@Controller('flatrooms')
@ApiTags('flatRooms')
@UseGuards(JwtGuard)
@ApiBearerAuth()
// @Injectable()
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
