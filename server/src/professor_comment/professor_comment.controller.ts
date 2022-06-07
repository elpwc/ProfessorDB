import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfessorCommentService } from './professor_comment.service';
import { CreateProfessorCommentDto } from './dto/create-professor_comment.dto';
import { UpdateProfessorCommentDto } from './dto/update-professor_comment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Professor } from 'src/professor/entities/professor.entity';

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
  @ApiResponse({ status: 200, description: 'success', type: Array })
  findAll() {
    return this.professorCommentService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'success', type: Professor })
  findOne(@Param('id') id: string) {
    return this.professorCommentService.findOne(+id);
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
