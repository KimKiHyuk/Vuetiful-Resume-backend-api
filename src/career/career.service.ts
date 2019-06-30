import { Injectable } from '@nestjs/common';
import { careerData } from '../interfaces/career.data';
import { CareerDatabaseService } from 'src/database/database.career.service';

@Injectable()
export class CareerService {
  private _count: number = 0;
  private career: careerData[] = [];

  constructor(private readonly CareerDatabaseService: CareerDatabaseService) { }

  findAll(): any {
    this.career = this.CareerDatabaseService.getAllFromDatabase();
    console.log('/career : ' + ++this._count);
    return this.career;
  }
}
