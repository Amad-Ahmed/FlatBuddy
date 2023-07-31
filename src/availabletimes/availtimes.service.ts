import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AvailTimesDto } from './dto';

@Injectable()
export class AvailTimesService {
  constructor(private prismaService: PrismaService) {}

  // function to add preference on basis of Advertisement id
  async addAvailTimes(dto: AvailTimesDto) {
    return await this.prismaService.availableTimes.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        Morning: dto.Morning,
      },
    });
  }

  // function to get amenities on basis of Advertisement id
  async getAvailTimes(dto: AvailTimesDto) {
    return await this.prismaService.availableTimes.findFirst({
      where: {
        PropertyAdID: dto.PropertyAdID,
        // ID: dto.ID,
      },
    });
  }

  // function to update amenities on basis of Advertisement id
  async updateAvailTimes(dto: AvailTimesDto) {
    return await this.prismaService.availableTimes.update({
      where: {
        PropertyAdID: dto.PropertyAdID,
        ID: dto.ID,
      },
      data: {
        Morning: dto.Morning,
      },
    });
  }
}
