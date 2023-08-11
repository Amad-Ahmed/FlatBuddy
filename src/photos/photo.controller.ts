import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { PhotoDto } from './dto';
import { FormDataRequest } from 'nestjs-form-data';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('photos')
@ApiTags('photos')
@UseGuards(JwtGuard)
@ApiBearerAuth()
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  @Post('uploadPhoto')
  // @FormDataRequest()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          console.log('hello world');
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  // @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({ type: String })
  async uploadPhoto(
    @Body() photoDto: PhotoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    photoDto.PropertyAdID = 'c56510f7-2c1b-4e27-ab61-afca24daaa76';
    console.log('HELLO');
    console.log(file.filename);
    // code to store the photo in the database
    const photo = await this.photoService.uploadPhoto(photoDto, file.filename);
    return photo;
  }
}
