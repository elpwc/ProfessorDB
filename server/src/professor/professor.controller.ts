import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('professor')
@ApiTags('Professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  create(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professorService.create(createProfessorDto);
  }

  @Get()
  findAll() {
    return this.professorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const promise = this.professorService.findOne(+id);
    if (await promise) {
      return promise;
    } else {
      throw new HttpException('not exist', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfessorDto: UpdateProfessorDto,
  ) {
    return this.professorService.update(+id, updateProfessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professorService.remove(+id);
  }
}
