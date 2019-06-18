import { Injectable } from '@nestjs/common';
import { CreateAboutMeDto } from './dto/aboutme.dto';

@Injectable()
export class AboutMeService {
    private aboutme: CreateAboutMeDto; 

    create(aboutme: CreateAboutMeDto) {
        this.aboutme = new CreateAboutMeDto()
    }

    findAll(): CreateAboutMeDto {
        // this.aboutme = new CreateAboutMeDto();
        this.aboutme = {
            information: {
                greet: 'test1',
                introduce: 'test2',
                job: 'test3',
                name: 'test4',
                nation: 'test123'
            }
        };
        return this.aboutme;
    }
}
