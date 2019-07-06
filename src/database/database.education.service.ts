import { Injectable } from '@nestjs/common';
import { aboutmeData } from 'src/interfaces/aboutme.data';
import { Database } from './database';
import { educationData } from 'src/interfaces/education.data';
import { Array } from 'core-js/library/js';
import json5 = require('json5');

@Injectable()
export class EducationDatabaseService implements Database {

    public getAllFromDatabase(): educationData[] {
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

        return json5.parse(json5.stringify(json));
    }
}
