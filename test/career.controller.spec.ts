import { Test, TestingModule } from '@nestjs/testing';
import { CareerController } from '../src/career/career.controller';

describe('Career Controller', () => {
  let controller: CareerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareerController],
    }).compile();

    controller = module.get<CareerController>(CareerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
