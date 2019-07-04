import { Injectable } from '@nestjs/common';
import { IDatabase } from './IDatabase';
import { Array } from 'core-js/library/js';
import { skillData } from 'src/interfaces/skill.data';
import json5 = require('json5');

@Injectable()
export class SkillDatabaseService implements IDatabase {

    public getAllFromDatabase(): any {
        // getting data from db
        let dataFromDatabase: skillData[] = this.getCareerData();

        return dataFromDatabase;
    }


    private getCareerData(): skillData[] {
        // get data from career table

        const json = {
            avatarSize: 150,
            skills: [
                {
                    name: 'C#',
                    proficiency: 5,
                    imageSource: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                    hashtag: [
                        {
                            name: 'wpf',
                        },
                        {
                            name: 'windows',
                        },
                    ],
                },
                {
                    name: 'JAVA',
                    proficiency: 5,
                    imageSource: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                    hashtag: [
                        {
                            name: 'android',
                        },
                    ],
                },
                {
                    name: 'C/C++',
                    proficiency: 5,
                    imageSource: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                    hashtag: [
                        {
                            name: 'windows device driver',
                        },
                        {
                            name: 'linux device driver',
                        },
                        {
                            name: 'kabasdasdasda',
                        },
                    ],
                },
                {
                    name: 'javascript',
                    proficiency: 3,
                    imageSource: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                    hashtag: [
                        {
                            name: 'web front',
                        },
                        {
                            name: 'web backend',
                        },
                    ],
                },
                {
                    name: 'python',
                    proficiency: 5,
                    imageSource: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                    hashtag: [
                        {
                            name: 'django',
                        },
                        {
                            name: 'crawler',
                        },
                    ],
                },
                {
                    name: 'Scala',
                    proficiency: 4,
                    imageSource: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                    hashtag: [
                        {
                            name: 'django',
                        },
                        {
                            name: 'crawler',
                        },
                    ],
                },
            ],
        };

        let str_json = json5.stringify(json);
        let result: skillData[] = json5.parse(str_json);

        return result;
    }


}
