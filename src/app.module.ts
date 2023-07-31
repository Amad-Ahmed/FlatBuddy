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

@Module({
  imports: [
    PrismaModule,
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
