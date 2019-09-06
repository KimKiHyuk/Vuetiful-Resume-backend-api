import { Controller, Get } from '@nestjs/common';
import { LogService } from 'src/log/log.service';
import { formatData } from 'src/interfaces/formatData';
import { FormatService } from './format.service';

@Controller('format')
export class FormatController {
    constructor(private readonly FormatService: FormatService, private readonly Logger: LogService) {
        // constructor
    }

    @Get()
    findAll(): formatData {
        //logger manager needs
        const data = this.FormatService.findAll();
        this.Logger.debug('FormatService called');
        return data;
    }
}