import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { AdvertisementController } from './advertisement/advertisement.controller';
import { AdvertisementService } from './advertisement/advertisement.service';
import { FavoriteModule } from './favorite/favorite.module';
import { PreferenceModule } from './preference/preference.module';
import { SharedModule } from './sharedspace/shared.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { AvailTimesModule } from './availabletimes/availtimes.module';
import { AvailDaysModule } from './availabledays/availdays.module';
import { HouseRulesModule } from './houserules/house.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { BedModule } from './bed/bed.module';
import { RoomandbedController } from './roomandbed/roomandbed.controller';
import { RoomandbedModule } from './roomandbed/roomandbed.module';
import { RoomModule } from './room/room.module';
import { FlatModule } from './flat/flat.module';
import { FlatRoomModule } from './flatrooms/flatrooms.module';
import { PhotoModule } from './photos/photo.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    PhotoModule,
    BedModule,
    FlatModule,
    FlatRoomModule,
    RoomModule,
    FavoriteModule,
    AvailDaysModule,
    HouseRulesModule,
    SharedModule,
    AmenitiesModule,
    AvailTimesModule,
    PreferenceModule,
    AuthModule,
    UserModule,
    AdvertisementModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RoomandbedModule,
    NestjsFormDataModule,
    MulterModule.register({
      dest: './uploads',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
  ],
  controllers: [AdvertisementController],
  providers: [
    PrismaService,
    AdvertisementService,
    {
      provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
