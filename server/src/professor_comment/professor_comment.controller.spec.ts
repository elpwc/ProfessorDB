import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorCommentController } from './professor_comment.controller';
import { ProfessorCommentService } from './professor_comment.service';

describe('ProfessorCommentController', () => {
  let controller: ProfessorCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessorCommentController],
      providers: [ProfessorCommentService],
    }).compile();

    controller = module.get<ProfessorCommentController>(ProfessorCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
