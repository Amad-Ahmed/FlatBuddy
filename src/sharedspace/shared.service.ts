import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SharedDto } from './dto';

@Injectable()
export class SharedService {
  constructor(private prismaService: PrismaService) {}

  // function to add preference on basis of Advertisement id
  async addSharedSpace(dto: SharedDto) {
    return await this.prismaService.sharedSpace.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        Kitchen: dto.Kitchen,
        Bathroom: dto.Bathroom,
        LivingRoom: dto.LivingRoom,
      },
    });
  }

  // function to get preference on basis of Advertisement id
  async getSharedSpace(dto: SharedDto) {
    return await this.prismaService.sharedSpace.findFirst({
      where: {
        PropertyAdID: dto.PropertyAdID,
        // ID: dto.ID,
      },
    });
  }

  // function to update preference on basis of Advertisement id
  async updateSharedSpace(dto: SharedDto) {
    return await this.prismaService.sharedSpace.update({
      where: {
        PropertyAdID: dto.PropertyAdID,
        ID: dto.ID,
      },
      data: {
        Kitchen: dto.Kitchen,
        Bathroom: dto.Bathroom,
        LivingRoom: dto.LivingRoom,
      },
    });
  }
}
