import { Injectable } from '@nestjs/common';
import { aboutmeData } from 'src/interfaces/aboutme.data';
import { IDatabase } from './IDatabase';
import { educationData } from 'src/interfaces/education.data';
import { Array } from 'core-js/library/js';
import json5 = require('json5');

@Injectable()
export class EducationDatabaseService implements IDatabase {

    public getAllFromDatabase(): educationData[] {
        // getting data from db
        let dataFromDatabase: educationData[] = this.getEducationData();

        return dataFromDatabase;
    }

    private getEducationData(): educationData[] {
        // get data from career table
        const json = [
            {
                institute: "Hallym University",
                type: "학사과정",
                description: "설명",
                period: "2015.03 ~ 현재"
            },
            {
                institute: "Griffith University",
                type: "교환학생",
                description: "설명",
                period: "2017.12 ~ 2018.03"
            },
            {
                institute: "BIGTORY 3기",
                type: "교육",
                description: "설명",
                period: "2017.03 ~ 2017.06"
            },
            {
                institute: "Software Maestro 8기",
                type: "교육",
                description: "설명",
                period: "2017.06 ~ 2017.12"
            }
        ]

          let str_json = json5.stringify(json);
          return json5.parse(str_json);
    }


}

