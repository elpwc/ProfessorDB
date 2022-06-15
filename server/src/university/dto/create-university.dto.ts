import { ApiProperty } from '@nestjs/swagger';
import { Professor } from 'src/professor/entities/professor.entity';

export class CreateUniversityDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  logo: string;

  @ApiProperty()
  website: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  professors: Professor[];
}
