import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { PreferenceService } from './preference.service';
import { PreferenceDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('preference')
@ApiTags('preference')
export class PreferenceController {
  constructor(
    private prismaService: PrismaService,
    private preferenceService: PreferenceService,
  ) {}

  // function to add preference on basis of Advertisement id
  @Post('addPreference')
  async addPreference(@Body() dto: PreferenceDto) {
    dto.Family = true;
    dto.ID = '2';
    return this.preferenceService.addPreference(dto);
  }

  // function to get preference on basis of Advertisement id
  @Post('getPreference')
  async getPreference(@Body() dto: PreferenceDto) {
    return this.preferenceService.getPreference(dto);
  }

  // function to update preference on basis of Advertisement id
  @Post('updatePreference')
  async updatePreference(@Body() dto: PreferenceDto) {
    return this.preferenceService.updatePreference(dto);
  }
}
