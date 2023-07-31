import { PrismaService } from 'src/prisma/prisma.service';
import { AdDto } from './dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdvertisementService {
  constructor(private prisma: PrismaService) {}

  async createAdvertisement(dto: AdDto) {
    return this.prisma.advertisementBase.create({
      data: {
        AdvertisementID: dto.AdvertisementID,
        Title: dto.Title,
        Description: dto.Description,
        PropertyType: dto.PropertyType,
        AdvertiserType: dto.AdvertiserType,
        City: dto.City,
        Address: dto.Address,
        Floor: dto.Floor,
        AvailableFrom: Number(dto.AvailableFrom),
        MinimumStayPeriod: dto.MinimumStayPeriod,
        MaximumStayPeriod: dto.MaximumStayPeriod,
        ScheduledCalls: dto.ScheduledCalls,
        Smoking: dto.Smoking,
        Vegetarian: dto.Vegetarian,
        UserID: dto.UserID,
      },
    });
  }
  async updateAdvertisement(advertisementId, data) {
    return this.prisma.advertisementBase.update({
      where: { AdvertisementID: advertisementId },
      data,
    });
  }
  async deleteAdvertisement(dto: AdDto) {
    return this.prisma.advertisementBase.delete({
      where: { AdvertisementID: dto.AdvertisementID, UserID: dto.UserID },
    });
  }

  async editAdvertisement(dto: AdDto) {
    return this.prisma.advertisementBase.update({
      where: { AdvertisementID: dto.AdvertisementID, UserID: dto.UserID },
      data: {
        AdvertisementID: dto.AdvertisementID,
        Title: dto.Title,
        Description: dto.Description,
        PropertyType: dto.PropertyType,
        AdvertiserType: dto.AdvertiserType,
        City: dto.City,
        Address: dto.Address,
        Floor: dto.Floor,
        AvailableFrom: Number(dto.AvailableFrom),
        MinimumStayPeriod: dto.MinimumStayPeriod,
        MaximumStayPeriod: dto.MaximumStayPeriod,
        ScheduledCalls: dto.ScheduledCalls,
        Smoking: dto.Smoking,
        Vegetarian: dto.Vegetarian,
        UserID: dto.UserID,
      },
    });
  }
}
