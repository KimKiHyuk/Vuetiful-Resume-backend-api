import { Controller, Get } from '@nestjs/common';
import { ProjectService } from 'src/project/project.service';
import { projectData } from 'src/interfaces/project.data';
@Controller('project')
export class ProjectController {
    constructor(private readonly ProjectService: ProjectService)
    {}

    @Get()
    findAll(): projectData[] {
        let data = this.ProjectService.findAll();
        return data;
    }

}
