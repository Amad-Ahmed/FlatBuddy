import { Injectable } from '@nestjs/common';
import { RoomandBedDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomandbedService {
  constructor(private prismaService: PrismaService) {}

  async getAllRoomandBed() {
    return await this.prismaService.bed.findMany();
  }

  async createRoomandBed(dto: RoomandBedDto) {
    return await this.prismaService.roomAndBed.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        TotalBedsRooms: dto.TotalBedsRooms,
        AvailableBedsRooms: dto.AvailableBedsRooms,
        NumberOfMales: dto.NumberOfMales,
        NumberOfFemales: dto.NumberOfFemales,
        MinAge: dto.MinAge,
        MaxAge: dto.MaxAge,
        PrefMinAge: dto.PrefMinAge,
        PrefMaxAge: dto.PrefMaxAge,
        PrefGender: dto.PrefGender,
      },
    });
  }

  async updateRoomandBed(dto: RoomandBedDto) {
    return await this.prismaService.roomAndBed.update({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        TotalBedsRooms: dto.TotalBedsRooms,
        AvailableBedsRooms: dto.AvailableBedsRooms,
        NumberOfMales: dto.NumberOfMales,
        NumberOfFemales: dto.NumberOfFemales,
        MinAge: dto.MinAge,
        MaxAge: dto.MaxAge,
        PrefMinAge: dto.PrefMinAge,
        PrefMaxAge: dto.PrefMaxAge,
        PrefGender: dto.PrefGender,
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
