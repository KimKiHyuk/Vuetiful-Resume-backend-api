import { Injectable } from '@nestjs/common';
import { Date } from 'core-js/library/js';
@Injectable()
export class LogService {

    public debug(message: string) {
        console.log("[Debug] " + message);
    }
}
