import { IsNotEmpty } from 'class-validator';

export class AvailDaysDto {
  @IsNotEmpty()
  ID: string;
  @IsNotEmpty()
  PropertyAdID: string;
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
}
