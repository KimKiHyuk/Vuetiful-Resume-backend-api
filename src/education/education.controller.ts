import { Controller, Get } from '@nestjs/common';
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {
    constructor(private readonly EducationService: EducationService) { }
    
    @Get()
    findAll(): any {
        let data = this.EducationService.findAll();
        return data;
    }
}
