import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AvailDaysDto } from './dto';

@Injectable()
export class AvailDaysService {
  constructor(private prismaService: PrismaService) {}

  // function to add available days on basis of Advertisement id
  async addAvailDays(dto: AvailDaysDto) {
    return await this.prismaService.availableDays.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        Monday: dto.Monday,
      },
    });
  }

  // function to get available days on basis of Advertisement id
  async getAvailDays(dto: AvailDaysDto) {
    return await this.prismaService.availableDays.findFirst({
      where: {
        PropertyAdID: dto.PropertyAdID,
        // ID: dto.ID,
      },
    });
  }

  // function to update available days on basis of Advertisement id
  async updateAvailDays(dto: AvailDaysDto) {
    return await this.prismaService.availableDays.update({
      where: {
        PropertyAdID: dto.PropertyAdID,
        ID: dto.ID,
      },
      data: {
        // all the column values will come here
        Monday: dto.Monday,
        Thursday: dto.Thursday,
      },
    });
  }
}
