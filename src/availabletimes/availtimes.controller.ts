import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { AvailTimesService } from './availtimes.service';
import { AvailTimesDto } from './dto';

@UseGuards(JwtGuard)
@Controller('availableTimes')
export class AvailTimesController {
  constructor(
    private prismaService: PrismaService,
    private availTimesService: AvailTimesService,
  ) {}

  // function to add amenities on basis of Advertisement id
  @Post('addAvailTimes')
  async addAvailTimes(@Body() dto: AvailTimesDto) {
    dto.Afternoon = true;
    dto.ID = '2';
    return this.availTimesService.addAvailTimes(dto);
  }

  // function to get amenities on basis of Advertisement id
  @Post('getAvailTimes')
  async getAvailTimes(@Body() dto: AvailTimesDto) {
    return this.availTimesService.getAvailTimes(dto);
  }

  // function to update amenities on basis of Advertisement id
  @Post('updateAvailTimes')
  async updateAvailTimes(@Body() dto: AvailTimesDto) {
    return this.availTimesService.updateAvailTimes(dto);
  }
}
