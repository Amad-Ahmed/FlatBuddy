import { Body, Controller, Get, Injectable, Post, Put } from '@nestjs/common';
import { FlatDto } from './dto/index';
import { FlatService } from './flat.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('flats')
@ApiTags('flats')
@Injectable()
export class FlatController {
  constructor(private readonly flatsService: FlatService) {}

  @Get('getAllFlats')
  async getAllFlats() {
    return await this.flatsService.getAllFlats();
  }

  @Post('createFlat')
  async createFlat(@Body() flatDto: FlatDto) {
    return await this.flatsService.createFlat(flatDto);
  }

  @Put('updateFlat')
  async updateFlat(@Body() flatDto: FlatDto) {
    return await this.flatsService.updateFlat(flatDto);
  }

  //   @Delete(':id')
  //   async deleteBed({ id }: { id: number; }): Promise<void> {
  //     return await this.flatsService.deleteBed(id);
  //   }
}
