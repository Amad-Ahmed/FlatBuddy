import { Body, Controller, Get, Injectable, Post, Put } from '@nestjs/common';
import { BedDto } from './dto/index';
import { BedService } from './bed.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('beds')
@ApiTags('beds')
@Injectable()
export class BedController {
  constructor(private readonly bedsService: BedService) {}

  @Get('getAllBeds')
  async getAllBeds() {
    return await this.bedsService.getAllBeds();
  }

  @Post('createBed')
  async createBed(@Body() bedDto: BedDto) {
    return await this.bedsService.createBed(bedDto);
  }

  @Put('updateBed')
  async updateBed(@Body() bedDto: BedDto) {
    return await this.bedsService.updateBed(bedDto);
  }

  //   @Delete(':id')
  //   async deleteBed({ id }: { id: number; }): Promise<void> {
  //     return await this.bedsService.deleteBed(id);
  //   }
}
