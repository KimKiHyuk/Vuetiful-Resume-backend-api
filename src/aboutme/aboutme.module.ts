import { Module } from '@nestjs/common';
import { AboutMeService } from './aboutme.service';
import { AboutMeController } from './aboutme.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { aboutmeEntity } from './aboutme.entity';

@Module({
  imports: [TypeOrmModule.forFeature([aboutmeEntity])],
  providers: [AboutMeService],
  controllers: [AboutMeController],
})
export class AboutMeModule {}