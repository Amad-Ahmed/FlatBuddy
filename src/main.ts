import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './http-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useStaticAssets('uploads', {
  //   prefix: '/uploads',
  // });
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     transform: true,
  //   }),
  // );
  // globally added filter
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('FlatBuddy')
    .setDescription('FlatBuddy API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('advertisement')
    .addTag('auth')
    .addTag('amenities')
    .addTag('sharedSpace')
    .addTag('houseRules')
    .addTag('favorite')
    .addTag('availableTimes')
    .addTag('preference')
    .addTag('beds')
    .addTag('rooms')
    .addTag('flats')
    .addTag('flatRooms')
    .addTag('roomandbed')
    .addTag('photos')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
