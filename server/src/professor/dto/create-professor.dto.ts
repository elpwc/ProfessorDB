import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessorDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  namecn: string;

  @ApiProperty()
  namejp: string;

  @ApiProperty()
  nameen: string;

  @ApiProperty()
  university: string;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  direction: string;

  @ApiProperty()
  description: string;
}
