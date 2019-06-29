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
        console.log("get all info");
        const allAboutme = this.aboutMe.findAll()
        return allAboutme;
    }
}
