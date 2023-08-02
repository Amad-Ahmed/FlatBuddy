import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
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
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
