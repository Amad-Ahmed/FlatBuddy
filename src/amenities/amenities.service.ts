import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AmenitiesDto } from './dto';

@Injectable()
export class AmenitiesService {
  constructor(private prismaService: PrismaService) {}

  // function to add preference on basis of Advertisement id
  async addAmenities(dto: AmenitiesDto) {
    return await this.prismaService.amenities.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        AirConditioned: dto.AirConditioned,
        Parking: dto.Parking,
        RooftopTerrace: dto.RooftopTerrace,
      },
    });
  }

  // function to get amenities on basis of Advertisement id
  async getAmenities(dto: AmenitiesDto) {
    return await this.prismaService.amenities.findFirst({
      where: {
        PropertyAdID: dto.PropertyAdID,
        // ID: dto.ID,
      },
    });
  }

  // function to update amenities on basis of Advertisement id
  async updateAmenities(dto: AmenitiesDto) {
    return await this.prismaService.amenities.update({
      where: {
        PropertyAdID: dto.PropertyAdID,
        ID: dto.ID,
      },
      data: {
        AirConditioned: dto.AirConditioned,
        Parking: dto.Parking,
        RooftopTerrace: dto.RooftopTerrace,
        WashingMachine: dto.WashingMachine,
      },
    });
  }
}
