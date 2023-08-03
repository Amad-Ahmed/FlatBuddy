import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdvertisementService } from './advertisement.service';
import { GetUser } from 'src/auth/decorator';
import { AdvertiserTypeEnum, PropertyTypeEnum, User } from '@prisma/client';
import { AdDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('advertisement')
@ApiTags('advertisement')
@ApiBearerAuth()
export class AdvertisementController {
  constructor(
    private prisma: PrismaService,
    private adService: AdvertisementService,
  ) {}

  //function to create a new advertisement
  @Post('createAdvertisement')
  async createAdvertisement(@GetUser() user: User, @Body() dto: AdDto) {
    dto.UserID = user.ID;
    console.log('Create Advertisement data');
    console.log('Property Type Enum');
    console.log(PropertyTypeEnum[dto.PropertyType]);
    dto.PropertyType = PropertyTypeEnum[dto.PropertyType];
    console.log('Advertiser Type Enum');
    console.log(AdvertiserTypeEnum[dto.AdvertiserType]);
    dto.AdvertiserType = AdvertiserTypeEnum[dto.AdvertiserType];
    // dto.MinimumStayPeriod = 30;
    // dto.MaximumStayPeriod = 365;
    // dto.ScheduledCalls = true;
    // dto.Smoking = false;
    // dto.Vegetarian = false;
    // dto.AvailableFrom = BigInt(1690506443);

    return await this.adService.createAdvertisement(dto);
  }

  //function to get all advertisements
  @Get('getAllAdvertisements')
  async getAllAdvertisements() {
    const advertisements = await this.prisma.advertisementBase.findMany();
    // custom JSON.stringify to convert bigint to string
    return JSON.stringify(advertisements, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value,
    );
  }

  // function to get advertisements of a specific user
  @Get('getUserAdvertisements')
  async getUserAdvertisements(@GetUser() user: User) {
    const advertisements = await this.prisma.advertisementBase.findMany({
      where: {
        UserID: user.ID,
      },
    });
    // custom JSON.stringify to convert bigint to string
    return JSON.stringify(advertisements, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value,
    );
  }

  //function to delete an advertisement on basis of Advertisement ID and user ID
  @Post('deleteAdvertisement')
  async deleteAdvertisement(@GetUser() user: User, @Body() dto: AdDto) {
    console.log('Delete Advertisement data');
    console.log(dto.AdvertisementID);
    console.log('Pre-existing User');
    console.log(user.ID);
    dto.UserID = user.ID;
    return await this.adService.deleteAdvertisement(dto);
  }

  // function to edit an advertisement on basis of Advertisement ID and user ID
  @Post('editAdvertisement')
  async editAdvertisement(@GetUser() user: User, @Body() dto: AdDto) {
    console.log('Edit Advertisement data');
    console.log(dto.AdvertisementID);
    console.log('Pre-existing User');
    console.log(user.ID);
    dto.UserID = user.ID;
    return await this.adService.editAdvertisement(dto);
  }
}
