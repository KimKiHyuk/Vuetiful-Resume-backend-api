import { Injectable } from '@nestjs/common';
import { Database } from './database';
import { Array } from 'core-js/library/js';
import { skillData } from 'src/interfaces/skill.data';
import json5 = require('json5');

@Injectable()
export class SkillDatabaseService implements Database {

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
                {
                    name: 'Scala1',
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
                {
                    name: 'Scala2',
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
                {
                    name: 'Scala3',
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

        return json5.parse(json5.stringify(json));
    }
}
