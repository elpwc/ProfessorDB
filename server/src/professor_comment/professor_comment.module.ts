import { Module } from '@nestjs/common';
import { ProfessorCommentService } from './professor_comment.service';
import { ProfessorCommentController } from './professor_comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorComment } from './entities/professor_comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessorComment])],
  controllers: [ProfessorCommentController],
  providers: [ProfessorCommentService],
})
export class ProfessorCommentModule {}
