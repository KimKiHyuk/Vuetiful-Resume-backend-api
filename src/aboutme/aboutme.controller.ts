import { Controller, Get } from '@nestjs/common';
import { AboutMeService } from './aboutme.service';
import { aboutmeData } from '../interfaces/aboutme.data';

@Controller('aboutme')
export class AboutMeController {
    constructor(private readonly aboutMe: AboutMeService) {
        // constructor
    }

    @Get()
    findAll(): aboutmeData {
        //logger manager needs
        const data = this.aboutMe.findAll()
        return data;
    }
}
