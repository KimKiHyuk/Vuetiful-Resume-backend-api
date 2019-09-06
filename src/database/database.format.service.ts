import { Injectable } from '@nestjs/common';
import { Database } from './database';
import { Array } from 'core-js/library/js';
import json5 = require('json5');
import { formatData } from 'src/interfaces/formatData';

@Injectable()
export class FormatDatabaseService implements Database {

    public getAllFromDatabase(): formatData {
        // getting data from db
        const json = new formatData();
        
        console.log('for test', json);
        return json5.parse(json5.stringify(json));
    }
}
