import { Controller, Get } from '@nestjs/common';
import { SkillService } from 'src/skill/skill.service';
import { skillData } from 'src/interfaces/skill.data';
@Controller('skill')
export class SkillController {
    constructor(private readonly SkillService: SkillService)
    {

    }

    @Get()
    findAll() : skillData[]
    {
        return this.SkillService.findAll();
    }
}
