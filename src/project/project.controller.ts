import { Controller, Get } from '@nestjs/common';
import { ProjectService } from 'src/project/project.service';
import { projectData } from 'src/interfaces/project.data';
import { LogService } from 'src/log/log.service';
@Controller('project')
export class ProjectController {
    constructor(private readonly ProjectService: ProjectService, private readonly Logger: LogService)
    {}

    @Get()
    findAll(): projectData[] {
        const data = this.ProjectService.findAll();
        this.Logger.debug('Project called');
        return data;
    }

}
