import { Controller, Get } from '@nestjs/common';
import { AboutMeService } from './aboutme.service';
import { CreateAboutMeDto } from './dto/aboutme.dto';

@Controller('aboutme')
export class AboutMeController {
    constructor(private readonly aboutMe: AboutMeService) {
        // constructor
    }

    @Get()
    findAll(): CreateAboutMeDto {
        console.log("get all info");
        const allAboutme = this.aboutMe.findAll()
        return allAboutme;
    }
}
