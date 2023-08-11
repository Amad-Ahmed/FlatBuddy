import {
  Body,
  Controller,
  Get,
  Injectable,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoomandbedService } from './roomandbed.service';
import { RoomandBedDto } from './dto';
import { JwtGuard } from 'src/auth/guard';

@Controller('roomandbed')
@ApiTags('roomandbed')
@UseGuards(JwtGuard)
@ApiBearerAuth()
// @Injectable()
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
