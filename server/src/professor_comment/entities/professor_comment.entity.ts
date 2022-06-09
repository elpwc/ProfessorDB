import { ApiProperty } from '@nestjs/swagger';
import { Professor } from 'src/professor/entities/professor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProfessorComment {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 2048, default: '' })
  @ApiProperty()
  content: string;

  @Column({ length: 8, default: '' })
  @ApiProperty()
  year: string;

  @Column({ length: 2, default: '' })
  @ApiProperty()
  month: string;

  @Column({ length: 16, default: '' })
  @ApiProperty()
  type: string;

  @Column()
  @ApiProperty()
  userid: number;

  @ManyToOne(() => Professor, (professor) => professor.comments)
  @ApiProperty()
  professor: Professor;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  createtime: Date;
}
