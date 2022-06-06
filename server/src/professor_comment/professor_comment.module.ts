import { Module } from '@nestjs/common';
import { ProfessorCommentService } from './professor_comment.service';
import { ProfessorCommentController } from './professor_comment.controller';

@Module({
  controllers: [ProfessorCommentController],
  providers: [ProfessorCommentService]
})
export class ProfessorCommentModule {}
