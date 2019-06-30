import { Injectable } from '@nestjs/common';
import { aboutmeData } from 'src/interfaces/aboutme.data';
import { IDatabase } from './IDatabase';
import { educationData } from 'src/interfaces/education.data';
import { Array } from 'core-js/library/js';

@Injectable()
export class EducationDatabaseService implements IDatabase {

    public getAllFromDatabase(): any {
        // getting data from db
        let dataFromDatabase: educationData[] = [];
        dataFromDatabase.push(this.createEducationData('설명', 'Hallym University', '2015.03 ~ 현재', '학사과정'));
        dataFromDatabase.push(this.createEducationData('설명', 'Griffith University', '2017.12 ~ 2018.03', '교환학생'));
        dataFromDatabase.push(this.createEducationData('설명', 'BIGTORY 3기', '2017.03 ~ 2017.06',  '교육'));
        dataFromDatabase.push(this.createEducationData('설명', 'Software Maestro 8기 ', '2017.06 ~ 2017.12', '교육'));
 
        return dataFromDatabase;
    }

    private createEducationData(description: string, insititute: string, period: string, type: string): educationData {
        // get data from career table
        const ret: educationData = {
            description: description,
            insititute: insititute,
            period: period,
            type: type,
        }

        return ret;
    }


}

