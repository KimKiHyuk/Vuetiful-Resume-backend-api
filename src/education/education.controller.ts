import { Controller, Get } from '@nestjs/common';
import { EducationService } from './education.service';
import { educationData } from 'src/interfaces/education.data';

@Controller('education')
export class EducationController {
    constructor(private readonly EducationService: EducationService) { }
    
    @Get()
    findAll(): educationData[] {
        let data = this.EducationService.findAll();
        return data;
    }
}
