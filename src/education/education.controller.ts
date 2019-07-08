import { Controller, Get } from '@nestjs/common';
import { EducationService } from './education.service';
import { educationData } from 'src/interfaces/education.data';
import { LogService } from 'src/log/log.service';

@Controller('education')
export class EducationController {
    constructor(private readonly EducationService: EducationService, private readonly Logger: LogService) { }
    
    @Get()
    findAll(): educationData[] {
        const data = this.EducationService.findAll();
        this.Logger.debug('Education called');
        return data;
    }
}
