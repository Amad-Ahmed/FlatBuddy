import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma/prisma.service';
import { PhotoDto } from './dto';
import { MakeTimedIDUnique } from 'src/common-helpers/helper';

@ApiTags('photos')
@Injectable()
export class PhotoService {
  constructor(private prisma: PrismaService) {}
  async uploadPhoto(photoDto: PhotoDto, filename: string) {
    // code to store the photo in the database
    console.log('Inside UploadPhoto');
    console.log(filename);
    const photo = await this.prisma.photos.create({
      data: {
        ID: MakeTimedIDUnique(),
        PropertyAdID: photoDto.PropertyAdID,
        PhotoValue: filename,
      },
    });
    return photo;
  }
}
