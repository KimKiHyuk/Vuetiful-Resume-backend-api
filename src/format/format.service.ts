import { Injectable } from '@nestjs/common';
import { formatData } from 'src/interfaces/formatData';
import { FormatDatabaseService } from 'src/database/database.format.service';

@Injectable()
export class FormatService {
  private _count: number = 0;

  constructor(private readonly FormatDatabaseService: FormatDatabaseService) { }

  findAll(): formatData {
    const data  = this.FormatDatabaseService.getAllFromDatabase();
    return data;
  }
}
