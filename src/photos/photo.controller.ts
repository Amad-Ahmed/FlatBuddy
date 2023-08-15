import {
  Body,
  Controller,
  Get,
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
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/img',
        filename: (req, file, cb) => {
          // providing a unique name for the file
          const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${
            file.originalname
          }`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
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
  @ApiResponse({ type: String })
  async uploadPhoto(
    @Body() photoDto: PhotoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('HELLO');
    console.log(file.filename);
    // photoDto.PropertyAdID = 'c56510f7-2c1b-4e27-ab61-afca24daaa76';
    console.log(file.path);
    const path = file.path;
    //code to parse through the path variable and reverse the slashes
    const newPath = path.replace(/\\/g, '/');
    console.log('NEWPATH');
    console.log(newPath);
    // code to store the photo in the database
    const photo = await this.photoService.uploadPhoto(photoDto, newPath);
    console.log(file.path);
    return photo;
  }

  @Post('getPhotos')
  @ApiResponse({ type: String })
  async getPhotos(@Body() photoDto: PhotoDto) {
    photoDto.PropertyAdID = 'c56510f7-2c1b-4e27-ab61-afca24daaa76';
    // I could provide the path to the front end developer to display the photo
    //http://localhost:3000/public/img/1692083021075-682708064votingiva.png
    const photos = await this.photoService.getPhotos(photoDto.PropertyAdID);
    return photos;
  }

  //endpoint to delete all photos which have null in the propertyAdID column
  @Post('deletePhotos')
  @ApiResponse({ type: String })
  async deletePhotos() {
    const photos = await this.photoService.deleteNullPhotos();
    return photos;
  }
}
