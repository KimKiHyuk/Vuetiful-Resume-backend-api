import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutMeController } from './aboutme/aboutme.controller';
import { AboutMeService } from './aboutme/aboutme.service';
import { CareerService } from './career/career.service';
import { CareerController } from './career/career.controller';
import { DatabaseService } from './database/database.service';
import { AboutMeDatabaseService } from './database/database.aboutme.service';
import { CareerDatabaseService } from './database/database.career.service';
import { EducationDatabaseService } from './database/database.education.service';
import { EducationService } from './education/education.service';
import { EducationController } from './education/education.controller';
import { SkillDatabaseService } from './database/database.skill.service';
import { SkillService } from './skill/skill.service';
import { SkillController } from './skill/skill.controller';
import { ProjectDatabaseService } from './database/database.project.service';
import { ProjectService } from './project/project.service';
import { ProjectController } from './project/project.controller';

@Module({
  imports: [],
  controllers: [AppController, 
                      AboutMeController, 
                      CareerController, 
                      EducationController, 
                      SkillController, 
                      ProjectController],
  providers: [AppService,
                    AboutMeService, 
                    CareerService, 
                    EducationService, 
                    SkillService, 
                    ProjectService,
                    DatabaseService, 
                    AboutMeDatabaseService,
                    CareerDatabaseService, 
                    EducationDatabaseService, 
                    SkillDatabaseService,
                    ProjectDatabaseService,],
})
export class AppModule { }
