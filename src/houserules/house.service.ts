import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HouseRulesDto } from './dto';

@Injectable()
export class HouseRulesService {
  constructor(private prismaService: PrismaService) {}

  // function to add house rules on basis of Advertisement id
  async addHouseRules(dto: HouseRulesDto) {
    return await this.prismaService.houseRules.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        HouseRules: dto.HouseRules,
      },
    });
  }

  // function to get house rules on basis of Advertisement id
  async getHouseRules(dto: HouseRulesDto) {
    return await this.prismaService.houseRules.findFirst({
      where: {
        PropertyAdID: dto.PropertyAdID,
        // ID: dto.ID,
      },
    });
  }

  // function to update house rules on basis of Advertisement id
  async updateHouseRules(dto: HouseRulesDto) {
    return await this.prismaService.houseRules.update({
      where: {
        PropertyAdID: dto.PropertyAdID,
        ID: dto.ID,
      },
      data: {
        HouseRules: dto.HouseRules,
      },
    });
  }
}
