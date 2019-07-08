import { Injectable } from '@nestjs/common';
import { EducationDatabaseService } from 'src/database/database.education.service';
import { educationData } from 'src/interfaces/education.data';

@Injectable()
export class EducationService {
    constructor(private readonly EducationDatabaseService: EducationDatabaseService) { }

    findAll(): educationData[] {
        const data = this.EducationDatabaseService.getAllFromDatabase();
        return data;
    }

    
}
