import {
  Body,
  Controller,
  Get,
  Injectable,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { FlatDto } from './dto/index';
import { FlatService } from './flat.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';

@Controller('flats')
@ApiTags('flats')
@UseGuards(JwtGuard)
@ApiBearerAuth()
// @Injectable()
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
