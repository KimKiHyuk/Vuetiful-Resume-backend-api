import { Injectable } from '@nestjs/common';
import { careerData } from '../interfaces/career.data';
import { CareerDatabaseService } from 'src/database/database.career.service';

@Injectable()
export class CareerService {
  private _count: number = 0;

  constructor(private readonly CareerDatabaseService: CareerDatabaseService) { }

  findAll(): careerData[] {
    const data  = this.CareerDatabaseService.getAllFromDatabase();
    return data;
  }
}
