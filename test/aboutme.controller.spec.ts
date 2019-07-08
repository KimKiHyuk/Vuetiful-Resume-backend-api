import { Test, TestingModule } from '@nestjs/testing';
import { AboutMeController } from '../src/aboutme/aboutme.controller';

describe('AboutMe Controller', () => {
  let controller: AboutMeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutMeController],
    }).compile();

    controller = module.get<AboutMeController>(AboutMeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
