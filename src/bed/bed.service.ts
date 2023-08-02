import { Injectable } from '@nestjs/common';
import { BedDto } from './dto/index';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BedService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllBeds() {
    return await this.prismaService.bed.findMany();
  }

  async createBed(dto: BedDto) {
    return await this.prismaService.bed.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        BedType: dto.BedType,
        Rent: dto.Rent,
        Deposit: dto.Deposit,
        BillingPeriod: dto.BillingPeriod,
        IncludeBills: dto.IncludeBills,
      },
    });
  }

  async updateBed(dto: BedDto): Promise<BedDto> {
    return await this.prismaService.bed.update({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        BedType: dto.BedType,
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
