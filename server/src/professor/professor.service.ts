import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private repository: Repository<Professor>,
  ) {}

  create(createProfessorDto: CreateProfessorDto) {
    return this.repository.save(createProfessorDto);
  }

  findAll(): Promise<Professor[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return this.repository.update(id, updateProfessorDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
