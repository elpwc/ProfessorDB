import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorCommentService } from './professor_comment.service';

describe('ProfessorCommentService', () => {
  let service: ProfessorCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessorCommentService],
    }).compile();

    service = module.get<ProfessorCommentService>(ProfessorCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
