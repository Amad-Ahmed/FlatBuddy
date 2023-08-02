import { Body, Controller, Get, Injectable, Post, Put } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { RoomandbedService } from './roomandbed.service';
import { RoomandBedDto } from './dto';

@Controller('roomandbed')
@ApiTags('roomandbed')
@Injectable()
export class RoomandbedController {
  constructor(private readonly roomandbedService: RoomandbedService) {}

  @Get('getAllRoomandBed')
  async getAllRoomandBed() {
    return await this.roomandbedService.getAllRoomandBed();
  }

  @Post('createRoomandBed')
  async createRoomandBed(@Body() roomandbedDto: RoomandBedDto) {
    return await this.roomandbedService.createRoomandBed(roomandbedDto);
  }

  @Put('updateRoomandBed')
  async updateRoomandBed(@Body() roomandbedDto: RoomandBedDto) {
    return await this.roomandbedService.updateRoomandBed(roomandbedDto);
  }

  //   @Delete(':id')
  //   async deleteBed({ id }: { id: number; }): Promise<void> {
  //     return await this.bedsService.deleteBed(id);
  //   }
}
