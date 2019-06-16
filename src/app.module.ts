import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutMeController } from './about-me/about-me.controller';
import { AboutMeService } from './about-me/about-me.service';

@Module({
  imports: [],
  controllers: [AppController, AboutMeController],
  providers: [AppService, AboutMeService],
})
export class AppModule {}
