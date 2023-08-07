import { Injectable } from '@nestjs/common';
import { FlatRoomDto } from './dto/index';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlatRoomService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllflatRooms() {
    return await this.prismaService.flatRooms.findMany();
  }

  async createflatRooms(dto: FlatRoomDto) {
    return await this.prismaService.flatRooms.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        RoomType: dto.RoomType,
        AttachBathroom: dto.AttachBathroom,
      },
    });
  }

  async updateflatRooms(dto: FlatRoomDto): Promise<FlatRoomDto> {
    return await this.prismaService.flatRooms.update({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        RoomType: dto.RoomType,
        AttachBathroom: dto.AttachBathroom,
      },
      where: {
        ID: dto.ID,
      },
    });
  }

  //   async deleteflatRooms(id: number): Promise<void> {
  //     return await this.flatRoomssRepository.deleteflatRooms(id);
  //   }
}
