import { ApiProperty } from '@nestjs/swagger';
import { Professor } from 'src/professor/entities/professor.entity';

export class CreateProfessorCommentDto {
  @ApiProperty()
  content: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  month: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  professor: Professor;
}
