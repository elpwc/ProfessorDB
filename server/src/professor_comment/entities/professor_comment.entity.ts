import { ApiProperty } from '@nestjs/swagger';
import { Professor } from 'src/professor/entities/professor.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProfessorComment {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ManyToOne(() => Professor, (professor) => professor.comments)
  professor: Professor;
}
