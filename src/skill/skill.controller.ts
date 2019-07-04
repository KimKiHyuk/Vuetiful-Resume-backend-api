import { Controller, Get } from '@nestjs/common';
import { SkillService } from 'src/skill/skill.service';
@Controller('skill')
export class SkillController {
    constructor(private readonly SkillService: SkillService)
    {

    }

    @Get()
    findAll() : any
    {
        return this.SkillService.findAll();
    }
}
