import { Controller, Get } from '@nestjs/common';
import { CareerService } from 'src/career/career.service';
import { careerData } from 'src/interfaces/career.data';

@Controller('career')
export class CareerController {
    constructor(private readonly CareerService: CareerService) {
        // constructor
    }

    @Get()
    findAll(): careerData[] {
        //logger manager needs
        let data = this.CareerService.findAll();
        return data;
    }
}