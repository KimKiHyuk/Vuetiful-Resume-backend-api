import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutMeController } from './about-me/about-me.controller';

@Module({
  imports: [],
  controllers: [AppController, AboutMeController],
  providers: [AppService],
})
export class AppModule {}
