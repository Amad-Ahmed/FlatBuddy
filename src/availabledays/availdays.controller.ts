import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { AvailDaysService } from './availdays.service';
import { AvailDaysDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('availableDays')
@ApiTags('availableDays')
export class AvailDaysController {
  constructor(
    private prismaService: PrismaService,
    private availDaysService: AvailDaysService,
  ) {}

  // function to add available days on basis of Advertisement id
  @Post('addAvailDays')
  async addAvailDays(@Body() dto: AvailDaysDto) {
    // dto.Monday = true;
    // dto.ID = '2';
    return this.availDaysService.addAvailDays(dto);
  }

  // function to get available days on basis of Advertisement id
  @Post('getAvailDays')
  async getAvailDays(@Body() dto: AvailDaysDto) {
    return this.availDaysService.getAvailDays(dto);
  }

  // function to update available days on basis of Advertisement id
  @Post('updateAvailDays')
  async updateAvailDays(@Body() dto: AvailDaysDto) {
    return this.availDaysService.updateAvailDays(dto);
  }
}
