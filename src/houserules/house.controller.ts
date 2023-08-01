import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { HouseRulesService } from './house.service';
import { HouseRulesDto } from './dto';

@UseGuards(JwtGuard)
@Controller('houseRules')
export class HouseRulesController {
  constructor(
    private prismaService: PrismaService,
    private houseRulesService: HouseRulesService,
  ) {}

  // function to add house rules on basis of Advertisement id
  @Post('addHouseRules')
  async addHouseRules(@Body() dto: HouseRulesDto) {
    // dto.HouseRules = 'Control Noise';
    // dto.ID = '1';
    return this.houseRulesService.addHouseRules(dto);
  }

  // function to get house rules on basis of Advertisement id
  @Post('getHouseRules')
  async getHouseRules(@Body() dto: HouseRulesDto) {
    return this.houseRulesService.getHouseRules(dto);
  }

  // function to update house rules on basis of Advertisement id
  @Post('updateHouseRules')
  async updateHouseRules(@Body() dto: HouseRulesDto) {
    return this.houseRulesService.updateHouseRules(dto);
  }
}
