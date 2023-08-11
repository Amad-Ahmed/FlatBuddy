import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { SharedService } from './shared.service';
import { SharedDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('sharedSpace')
@ApiTags('sharedSpace')
@ApiBearerAuth()
export class SharedController {
  constructor(
    private prismaService: PrismaService,
    private sharedService: SharedService,
  ) {}

  // function to add shared space on basis of Advertisement id
  @Post('addSharedSpace')
  async addSharedSpace(@Body() dto: SharedDto) {
    dto.Bathroom = true;
    dto.ID = '2';
    return this.sharedService.addSharedSpace(dto);
  }

  // function to get shared space on basis of Advertisement id
  @Post('getSharedSpace')
  async getSharedSpace(@Body() dto: SharedDto) {
    return this.sharedService.getSharedSpace(dto);
  }

  // function to update shared space on basis of Advertisement id
  @Post('updateSharedSpace')
  async updateSharedSpace(@Body() dto: SharedDto) {
    return this.sharedService.updateSharedSpace(dto);
  }
}
