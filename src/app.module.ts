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

@Module({
  imports: [
    PrismaModule,
    FavoriteModule,
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
  ],
  controllers: [AdvertisementController],
  providers: [PrismaService, AdvertisementService],
})
export class AppModule {}
