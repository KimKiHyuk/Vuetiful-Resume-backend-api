import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AboutMeController } from './aboutme/aboutme.controller';
// import { AboutMeService } from './aboutme/aboutme.service';
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
import { LogService } from './log/log.service';
import { AboutMeModule } from './aboutme/aboutme.module';
import { FormatService } from './format/format.service';
import { FormatController } from './format/format.controller';
import { FormatDatabaseService} from './database/database.format.service'

@Module({
  imports: [TypeOrmModule.forRoot(), AboutMeModule],
  controllers: [AppController, 
                    //  AboutMeController, 
                      CareerController, 
                      EducationController, 
                      SkillController, 
                      ProjectController, FormatController],
  providers: [AppService,
                  //  AboutMeService, 
                    CareerService, 
                    EducationService, 
                    SkillService, 
                    ProjectService,
                    DatabaseService, 
                    AboutMeDatabaseService,
                    CareerDatabaseService, 
                    EducationDatabaseService, 
                    SkillDatabaseService,
                    ProjectDatabaseService,
                    LogService,
                    FormatService,
                    FormatDatabaseService],
})
export class AppModule { }
