import { ApiProperty } from '@nestjs/swagger';
import { ProfessorComment } from 'src/professor_comment/entities/professor_comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 16, default: '' })
  @ApiProperty()
  namecn: string;

  @Column({ length: 16, default: '' })
  @ApiProperty()
  namejp: string;

  @Column({ length: 32, default: '' })
  @ApiProperty()
  nameen: string;

  @Column({ length: 32, default: '' })
  @ApiProperty()
  university: string;

  @Column({ length: 1024, default: '' })
  @ApiProperty()
  photo: string;

  @Column({ length: 64, default: '' })
  @ApiProperty()
  subject: string;

  @Column({ length: 64, default: '' })
  @ApiProperty()
  direction: string;

  @Column({ length: 128, default: '' })
  @ApiProperty()
  email: string;

  @Column({ length: 128, default: '' })
  @ApiProperty()
  website: string;

  @Column({ default: -1 })
  @ApiProperty()
  recommendation: number;

  @Column({ length: 4096, default: '' })
  @ApiProperty()
  description: string;

  @ApiProperty()
  @OneToMany(() => ProfessorComment, (comment) => comment.professor)
  comments: ProfessorComment[];

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  createtime: Date;
}
