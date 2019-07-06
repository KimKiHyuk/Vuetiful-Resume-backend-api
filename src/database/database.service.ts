import { Injectable } from '@nestjs/common';
import { Database } from './database';

@Injectable()
export class DatabaseService implements Database {

    public getAllFromDatabase() {
        // Get all data from all database
    }


}
