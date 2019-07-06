import { Injectable } from '@nestjs/common';
import { aboutmeData } from 'src/interfaces/aboutme.data';
import { IDatabase } from './IDatabase';
import json5 = require('json5');

@Injectable()
export class AboutMeDatabaseService implements IDatabase {

    public getAllFromDatabase(): aboutmeData {
        // getting data from db
        const json = {
            name: '김기혁',
            job: '소프트웨어 개발자',
            greet: 'Hello there11!',
            nation: '대한민국 서울특별시',
            introduce:
                'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        }
        
        let str_json = json5.stringify(json);

        return json5.parse(str_json);
    }
}
