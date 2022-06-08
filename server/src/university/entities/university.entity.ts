import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class University {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 64, default: '' })
  @ApiProperty()
  name: string;

  @Column({ length: 16, default: '' })
  @ApiProperty()
  position: string;

  @Column({ length: 512, default: '' })
  @ApiProperty()
  logo: string;

  @Column({ length: 512, default: '' })
  @ApiProperty()
  website: string;

  @Column({ length: 4096, default: '' })
  @ApiProperty()
  description: string;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  createtime: Date;
}
