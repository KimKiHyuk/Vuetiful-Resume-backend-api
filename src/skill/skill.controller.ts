import { Controller, Get } from '@nestjs/common';
import { SkillService } from 'src/skill/skill.service';
import { skillData } from 'src/interfaces/skill.data';
import { LogService } from 'src/log/log.service';
@Controller('skill')
export class SkillController {
    constructor(private readonly SkillService: SkillService, private readonly Logger: LogService)
    {

    }

    @Get()
    findAll() : skillData[]
    {
        const data = this.SkillService.findAll();
        this.Logger.debug('Skill called');
        return data;
    }
}
