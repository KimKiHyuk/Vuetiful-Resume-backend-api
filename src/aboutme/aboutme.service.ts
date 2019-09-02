import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { aboutmeData } from '../interfaces/aboutme.data';
import { aboutmeEntity } from './aboutme.entity'
import { AboutMeDatabaseService } from 'src/database/database.aboutme.service';
import { Repository } from 'typeorm';

@Injectable()
export class AboutMeService {
    constructor(
      @InjectRepository(aboutmeEntity) 
      private readonly aboutMeRepository: Repository<aboutmeEntity>)
      {}

    async findAll(): Promise<aboutmeEntity[]> {
        return await this.aboutMeRepository.find();
        // const data = this.AboutMeDatabaseService.getAllFromDatabase();
        // return data;
    }

    async updateAboutMe(data: aboutmeEntity) {
        console.log(data);
        this.aboutMeRepository.save(data)
    }
}
