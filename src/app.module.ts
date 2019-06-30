import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutMeController } from './aboutme/aboutme.controller';
import { AboutMeService } from './aboutme/aboutme.service';
import { CareerService } from './career/career.service';
import { CareerController } from './career/career.controller';
import { DatabaseService } from './database/database.service';
import { AboutMeDatabaseService } from './database/database.aboutme.service';

@Module({
  imports: [],
  controllers: [AppController, AboutMeController, CareerController],
  providers: [AppService, AboutMeService, CareerService, DatabaseService, AboutMeDatabaseService],
})
export class AppModule {}
