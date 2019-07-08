import { Injectable } from '@nestjs/common';
import { SkillDatabaseService } from 'src/database/database.skill.service';
import { skillData } from 'src/interfaces/skill.data';

@Injectable()
export class SkillService {
    constructor(private readonly SkillDatabaseService: SkillDatabaseService) {

    }

    findAll(): skillData[] {
        const data = this.SkillDatabaseService.getAllFromDatabase();
        return data;
    }
}