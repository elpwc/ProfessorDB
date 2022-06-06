import { PartialType } from '@nestjs/swagger';
import { CreateProfessorCommentDto } from './create-professor_comment.dto';

export class UpdateProfessorCommentDto extends PartialType(CreateProfessorCommentDto) {}
