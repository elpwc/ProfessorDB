import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University } from './entities/university.entity';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private repository: Repository<University>,
  ) {}

  create(createUniversityDto: CreateUniversityDto) {
    return this.repository.save(createUniversityDto);
  }

  findAll() {
    return this.repository.find();
  }

  search(text: string) {
    return this.repository.findBy({ name: Like(`%${text}%`) });
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateUniversityDto: UpdateUniversityDto) {
    return this.repository.update(id, updateUniversityDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
