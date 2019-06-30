import { Injectable } from '@nestjs/common';
import { EducationDatabaseService } from 'src/database/database.education.service';

@Injectable()
export class EducationService {
    constructor(private readonly EducationDatabaseService: EducationDatabaseService) { }

    findAll(): any {
        const data = this.EducationDatabaseService.getAllFromDatabase();
        console.log(data);
        return data;
    }

    
}
