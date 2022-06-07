import { ApiProperty } from '@nestjs/swagger';
import { ProfessorComment } from 'src/professor_comment/entities/professor_comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 16 })
  @ApiProperty()
  namecn: string;

  @Column({ length: 16 })
  @ApiProperty()
  namejp: string;

  @Column({ length: 32 })
  @ApiProperty()
  nameen: string;

  @Column({ length: 32 })
  @ApiProperty()
  university: string;

  @Column({ length: 1024 })
  @ApiProperty()
  photo: string;

  @Column({ length: 64 })
  @ApiProperty()
  subject: string;

  @Column({ length: 4096 })
  @ApiProperty()
  description: string;

  @ApiProperty()
  @OneToMany(() => ProfessorComment, (comment) => comment.professor)
  comments: ProfessorComment[];

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  createtime: Date;
}
