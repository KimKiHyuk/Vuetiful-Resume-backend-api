import { Injectable } from '@nestjs/common';
import { aboutmeData } from 'src/interfaces/aboutme.data';
import { IDatabase } from './IDatabase';
import { careerData } from 'src/interfaces/career.data';
import { Array } from 'core-js/library/js';
import json5 = require('json5');

@Injectable()
export class CareerDatabaseService implements IDatabase {

    public getAllFromDatabase(): careerData[] {
        // getting data from db
        let dataFromDatabase: careerData[] = this.getCareerData();
        return dataFromDatabase;
    }

    private getCareerData(): careerData[] {
        // get data from career table
        const json = [
            {
                color: 'cyan',
                year: '1960',
                month: '1',
                company: 'google inc',
                experience: 'honey sucker',
            },
            {
                color: 'green',
                year: '1970',
                month: '2',
                company: 'microsoft',
                experience: '아무것도 안함',
            },
            {
                color: 'pink',
                year: '1980',
                month: '3',
                company: 'naver',
                experience: '월급 축냄',
            },
            {
                color: 'amber',
                year: '1990',
                month: '4',
                company: 'kakao',
                experience: '업무시간에 잠',
            },
            {
                color: 'orange',
                year: '2000',
                month: '5',
                company: 'ROKCC',
                experience: '인턴',
            },
        ]

        let str_json = json5.stringify(json);


        return json5.parse(str_json);
    }


}
