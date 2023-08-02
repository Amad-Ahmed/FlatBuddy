import { IsNotEmpty } from 'class-validator';


export class BedDto{
  id: number;
  city: string;
  address: string;
  floor: number;
  advertiserTypeId: number;
  totalBeds: number;
  availableBeds: number;
  numOfMale: number;
  numOfFemales: number;
  minAge: number;
  maxAge: number;
  availableFrom: Date;
  minimumStay: number;
  maxStay: number;
  scheduleCalls: boolean;
  startDate: Date;
  prefMinAge: number;
  prefMaxAge: number;
  preGender: string;
  prefOccupation: string;
  title: string;
  description: string;
  userId: number;
}
