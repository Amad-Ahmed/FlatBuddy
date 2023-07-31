import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PreferenceDto } from './dto';

@Injectable()
export class PreferenceService {
  constructor(private prismaService: PrismaService) {}

  // function to add preference on basis of Advertisement id
  async addPreference(dto: PreferenceDto) {
    return await this.prismaService.preference.create({
      data: {
        ID: dto.ID,
        PropertyAdID: dto.PropertyAdID,
        Student: dto.Student,
        Professional: dto.Professional,
        PetOwners: dto.PetOwners,
        Family: dto.Family,
        Male: dto.Male,
        Female: dto.Female,
        Couple: dto.Couple,
      },
    });
  }

  // function to get preference on basis of Advertisement id
  async getPreference(dto: PreferenceDto) {
    return await this.prismaService.preference.findFirst({
      where: {
        PropertyAdID: dto.PropertyAdID,
        // ID: dto.ID,
      },
    });
  }

  // function to update preference on basis of Advertisement id
  async updatePreference(dto: PreferenceDto) {
    return await this.prismaService.preference.update({
      where: {
        PropertyAdID: dto.PropertyAdID,
        ID: dto.ID,
      },
      data: {
        Student: dto.Student,
        Professional: dto.Professional,
        PetOwners: dto.PetOwners,
        Family: dto.Family,
      },
    });
  }
}
