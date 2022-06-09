import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfessorCommentDto } from './dto/create-professor_comment.dto';
import { UpdateProfessorCommentDto } from './dto/update-professor_comment.dto';
import { ProfessorComment } from './entities/professor_comment.entity';

@Injectable()
export class ProfessorCommentService {
  constructor(
    @InjectRepository(ProfessorComment)
    private repository: Repository<ProfessorComment>,
  ) {}

  create(createProfessorCommentDto: CreateProfessorCommentDto) {
    return this.repository.save(createProfessorCommentDto);
  }

  update(id: number, updateProfessorCommentDto: UpdateProfessorCommentDto) {
    return this.repository.update(id, updateProfessorCommentDto);
  }

  findAll(): Promise<ProfessorComment[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
