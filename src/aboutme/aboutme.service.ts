import { Injectable } from '@nestjs/common';
import { aboutmeData } from '../interfaces/aboutme.data';
import { AboutMeDatabaseService } from 'src/database/database.aboutme.service';

@Injectable()
export class AboutMeService {
    constructor(private readonly AboutMeDatabaseService: AboutMeDatabaseService){}

    public findAll(): aboutmeData {
        const data = this.AboutMeDatabaseService.getAllFromDatabase();
        return data;
    }
}
