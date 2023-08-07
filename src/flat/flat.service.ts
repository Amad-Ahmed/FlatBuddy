import { Injectable } from '@nestjs/common';
import { FlatDto } from './dto/index';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlatService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllFlats() {
    return await this.prismaService.flat.findMany();
  }

  async createFlat(dto: FlatDto) {
    return await this.prismaService.flat.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        HouseType: dto.HouseType,
        PropertySize: dto.PropertySize,
        Rent: dto.Rent,
        Deposit: dto.Deposit,
        BillingPeriod: dto.BillingPeriod,
        IncludeBills: dto.IncludeBills,
      },
    });
  }

  async updateFlat(dto: FlatDto): Promise<FlatDto> {
    return await this.prismaService.flat.update({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        HouseType: dto.HouseType,
        PropertySize: dto.PropertySize,
        Rent: dto.Rent,
        Deposit: dto.Deposit,
        BillingPeriod: dto.BillingPeriod,
        IncludeBills: dto.IncludeBills,
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
