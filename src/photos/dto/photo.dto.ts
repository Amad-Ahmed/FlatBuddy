import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { FileSystemStoredFile, HasMimeType, IsFile } from 'nestjs-form-data';

export class PhotoDto {
  ID: string;

  PropertyAdID: string;

  @IsNotEmpty()
  @IsFile()
  @ApiProperty({ required: false, default: 'https://via.placeholder.com/150' })
  @HasMimeType(['image/png', 'image/jpeg', 'image/jpg'])
  PhotoValue: string;
}
