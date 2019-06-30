import { Injectable } from '@nestjs/common';
import { aboutmeData } from '../interfaces/aboutme.data';
import { AboutMeDatabaseService } from 'src/database/database.aboutme.service';

@Injectable()
export class AboutMeService {
    private  _count: number = 0;
    private _aboutme: aboutmeData;
    
    constructor(private readonly AboutMeDatabaseService: AboutMeDatabaseService){}

    public findAll(): aboutmeData {
        this._aboutme = this.AboutMeDatabaseService.getAllFromDatabase() as aboutmeData;
        console.log('/aboutme : ' + ++this._count );
        return this._aboutme;
    }
}
