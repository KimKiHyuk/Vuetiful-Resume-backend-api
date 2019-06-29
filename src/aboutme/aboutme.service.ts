import { Injectable } from '@nestjs/common';
import { aboutmeData } from '../interfaces/aboutme.data';

@Injectable()
export class AboutMeService {
    private aboutme: aboutmeData; 

    findAll(): aboutmeData {
        this.aboutme = this.getAllFromDatabase();
        return this.aboutme;
    }
 
    getAllFromDatabase(): aboutmeData {
        // getting data from db
        const dataFromDatabase: aboutmeData = {
            information: {
                greet: 'Hello, it is from server',
                introduce: '아 전역하고싶따',
                job: '병장(진)',
                name: 'Key kim',
                nation: '대한민국',
            }
        }

        return dataFromDatabase;
    }
}
