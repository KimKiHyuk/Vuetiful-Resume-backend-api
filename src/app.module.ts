import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutMeController } from './aboutme/aboutme.controller';
import { AboutMeService } from './aboutme/aboutme.service';

@Module({
  imports: [],
  controllers: [AppController, AboutMeController],
  providers: [AppService, AboutMeService],
})
export class AppModule {}
