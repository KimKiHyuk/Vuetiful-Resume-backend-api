import { Test, TestingModule } from '@nestjs/testing';
import { CareerService } from '../src/career/career.service';

describe('CareerService', () => {
  let service: CareerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareerService],
    }).compile();

    service = module.get<CareerService>(CareerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
