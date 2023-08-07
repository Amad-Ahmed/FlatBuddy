import { Injectable } from '@nestjs/common';
import { RoomDto } from './dto/index';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllRooms() {
    return await this.prismaService.room.findMany();
  }

  async createRoom(dto: RoomDto) {
    return await this.prismaService.room.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        RoomType: dto.RoomType,
        RoomSize: dto.RoomSize,
        Rent: dto.Rent,
        Deposit: dto.Deposit,
        BillingPeriod: dto.BillingPeriod,
        IncludeBills: dto.IncludeBills,
        AttachBathroom: dto.AttachBathroom,
      },
    });
  }

  async updateRoom(dto: RoomDto): Promise<RoomDto> {
    return await this.prismaService.room.update({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        RoomType: dto.RoomType,
        RoomSize: dto.RoomSize,
        Rent: dto.Rent,
        Deposit: dto.Deposit,
        BillingPeriod: dto.BillingPeriod,
        IncludeBills: dto.IncludeBills,
        AttachBathroom: dto.AttachBathroom,
      },
      where: {
        ID: dto.ID,
      },
    });
  }

  //   async deleteBed(id: number): Promise<void> {
  //     return await this.bedsRepository.deleteBed(id);
  //   }
}
