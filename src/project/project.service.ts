import { Injectable, Get } from '@nestjs/common';
import { ProjectDatabaseService } from 'src/database/database.project.service';
import { projectData } from 'src/interfaces/project.data';

@Injectable()
export class ProjectService {
    constructor (private readonly ProjectDatabaseService: ProjectDatabaseService){}

    findAll(): projectData[] {
        let data = this.ProjectDatabaseService.getAllFromDatabase();
        return data;
    }
}
