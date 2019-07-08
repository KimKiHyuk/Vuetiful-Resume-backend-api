import { Controller, Get } from '@nestjs/common';
import { CareerService } from 'src/career/career.service';
import { careerData } from 'src/interfaces/career.data';
import { LogService } from 'src/log/log.service';

@Controller('career')
export class CareerController {
    constructor(private readonly CareerService: CareerService, private readonly Logger: LogService) {
        // constructor
    }

    @Get()
    findAll(): careerData[] {
        //logger manager needs
        const data = this.CareerService.findAll();
        this.Logger.debug('career called');
        return data;
    }
}