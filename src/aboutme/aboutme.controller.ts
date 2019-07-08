import { Controller, Get } from '@nestjs/common';
import { AboutMeService } from './aboutme.service';
import { aboutmeData } from '../interfaces/aboutme.data';
import { LogService } from 'src/log/log.service';

@Controller('aboutme')
export class AboutMeController {
    constructor(private readonly aboutMe: AboutMeService,
                        private readonly Logger: LogService) {
        // constructor
    }

    @Get()
    findAll(): aboutmeData {
        //logger manager needs
        const data = this.aboutMe.findAll()
        this.Logger.debug('AboutMe called');
        return data;
    }
}
