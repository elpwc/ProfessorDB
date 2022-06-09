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
import { ProfessorCommentService } from './professor_comment.service';
import { CreateProfessorCommentDto } from './dto/create-professor_comment.dto';
import { UpdateProfessorCommentDto } from './dto/update-professor_comment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('professorComment')
@ApiTags('professorComment')
export class ProfessorCommentController {
  constructor(
    private readonly professorCommentService: ProfessorCommentService,
  ) {}

  @Post()
  create(@Body() createProfessorCommentDto: CreateProfessorCommentDto) {
    return this.professorCommentService.create(createProfessorCommentDto);
  }

  @Get()
  findAll() {
    return this.professorCommentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const promise = this.professorCommentService.findOne(+id);
    if (await promise) {
      return promise;
    } else {
      throw new HttpException('not exist', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfessorCommentDto: UpdateProfessorCommentDto,
  ) {
    return this.professorCommentService.update(+id, updateProfessorCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professorCommentService.remove(+id);
  }
}
