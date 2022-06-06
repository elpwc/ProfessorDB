import { Injectable } from '@nestjs/common';
import { CreateProfessorCommentDto } from './dto/create-professor_comment.dto';
import { UpdateProfessorCommentDto } from './dto/update-professor_comment.dto';

@Injectable()
export class ProfessorCommentService {
  create(createProfessorCommentDto: CreateProfessorCommentDto) {
    return 'This action adds a new professorComment';
  }

  findAll() {
    return `This action returns all professorComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professorComment`;
  }

  update(id: number, updateProfessorCommentDto: UpdateProfessorCommentDto) {
    return `This action updates a #${id} professorComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} professorComment`;
  }
}
