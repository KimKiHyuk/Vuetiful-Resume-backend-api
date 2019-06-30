import { Injectable } from '@nestjs/common';
import { aboutmeData } from 'src/interfaces/aboutme.data';
import { IDatabase } from './IDatabase';

@Injectable()
export class AboutMeDatabaseService implements IDatabase {

    public getAllFromDatabase(): any {
        // getting data from db
        const dataFromDatabase: aboutmeData = {
            information: {
                greet: 'Hello, it is from server',
                introduce: '최-신 인터페이스를 적용한 데이터베이스 모델',
                job: '병장(진)',
                name: 'Key kim',
                nation: '대한민국',
            }
        }

        return dataFromDatabase;
    }


}
