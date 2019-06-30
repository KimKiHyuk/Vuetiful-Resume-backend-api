import { Injectable } from '@nestjs/common';
import { aboutmeData } from 'src/interfaces/aboutme.data';
import { IDatabase } from './IDatabase';
import { careerData } from 'src/interfaces/career.data';
import { Array } from 'core-js/library/js';

@Injectable()
export class CareerDatabaseService implements IDatabase {

    public getAllFromDatabase(): any {
        // getting data from db
        let dataFromDatabase: careerData[] = [];
        dataFromDatabase.push(this.getCareerData('blue', 'Team Core ', 'IOT, 임베디드 컴퓨팅', '3', '2015'));
        dataFromDatabase.push(this.getCareerData('red', '한림대학교 운영체제 연구실', '리눅스 커널, 분산컴퓨팅(Hadoop), 인메모리 컴퓨팅(Spark)', '3', '2016'));
        dataFromDatabase.push(this.getCareerData('blue', '2A1M', '의료 처방전 관리 서비스, Opencv, Android, DJango', '6', '2017'));
        dataFromDatabase.push(this.getCareerData('red', '국방부 ', 'windows기반 PC보안 프로그램 개발', '3', '2018'));
        dataFromDatabase.push(this.getCareerData('blue', 'SmartRunner', 'IOT, (군) 안전한 체력측정 시스템 개발, 공군참모총장 ', '7', '2018'));

        return dataFromDatabase;
    }

    private getCareerData(color: string, company: string, experience: string, month: string, year: string): careerData {
        // get data from career table
        const ret: careerData = {
            color: color,
            company: company,
            experience: experience,
            month: month,
            year: year,
        }
        return ret;
    }


}
