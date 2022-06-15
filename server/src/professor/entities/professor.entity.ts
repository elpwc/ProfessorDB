import { ApiProperty } from '@nestjs/swagger';
import { ProfessorComment } from 'src/professor_comment/entities/professor_comment.entity';
import { University } from 'src/university/entities/university.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({ length: 32, default: '日本' })
  @ApiProperty()
  country: string;

  @Column({ default: false })
  @ApiProperty()
  canSpeakChinese: boolean;

  @Column({ default: 0 })
  @ApiProperty()
  gender: number;

  @Column({ default: 0 })
  @ApiProperty()
  birthYear: number;

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

  @Column({ default: -1 })
  @ApiProperty()
  haiwang: number;

  @Column({ default: -1 })
  @ApiProperty()
  replyrate: number;

  @Column({ length: 2048, default: '' })
  @ApiProperty()
  description: string;

  @Column({ length: 2048, default: '' })
  @ApiProperty()
  mine: string;

  @Column({ length: 1024, default: '' })
  @ApiProperty()
  students: string;

  @OneToMany(() => ProfessorComment, (comment) => comment.professor)
  @ApiProperty()
  comments: ProfessorComment[];

  @ManyToOne(() => University, (university) => university.professors)
  @ApiProperty()
  university: University;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  createtime: Date;
}
