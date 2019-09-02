import { Controller, Get, Put, Body} from '@nestjs/common';
import { AboutMeService } from './aboutme.service';
// import { aboutmeData } from '../interfaces/aboutme.data';
// import { LogService } from 'src/log/log.service';
import { aboutmeEntity } from './aboutme.entity';

@Controller('aboutme')
export class AboutMeController {
    constructor(private readonly aboutMe: AboutMeService) {
        // constructor
    }

    @Get()
    findAll(): Promise<aboutmeEntity[]> {
        //logger manager needs
   //     this.Logger.debug('AboutMe called');
        return this.aboutMe.findAll()
    }

    @Put()
    update(@Body() data: aboutmeEntity) {
        return this.aboutMe.updateAboutMe(data);
    }
}