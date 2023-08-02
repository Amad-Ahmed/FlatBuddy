import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { AmenitiesService } from './amenities.service';
import { AmenitiesDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('amenities')
@ApiTags('amenities')
export class AmenitiesController {
  constructor(
    private prismaService: PrismaService,
    private amenitiesService: AmenitiesService,
  ) {}

  // function to add amenities on basis of Advertisement id
  @Post('addAmenities')
  async addAmenties(@Body() dto: AmenitiesDto) {
    dto.AirConditioned = true;
    dto.ID = '2';
    return this.amenitiesService.addAmenities(dto);
  }

  // function to get amenities on basis of Advertisement id
  @Post('getAmenities')
  async getAmenities(@Body() dto: AmenitiesDto) {
    return this.amenitiesService.getAmenities(dto);
  }

  // function to update amenities on basis of Advertisement id
  @Post('updateAmenities')
  async updateAmenities(@Body() dto: AmenitiesDto) {
    return this.amenitiesService.updateAmenities(dto);
  }
}
