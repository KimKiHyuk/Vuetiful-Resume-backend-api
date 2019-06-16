import { Controller, Get } from '@nestjs/common';

@Controller('about-me')
export class AboutMeController {
    @Get('get-all-information')
    findAll(): string {
        return "test";
    }
}
