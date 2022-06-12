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
  gender: number;

  @ApiProperty()
  birthYear: number;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  website: string;

  @ApiProperty()
  recommendation: number;

  @ApiProperty()
  haiwang: number;

  @ApiProperty()
  replyrate: number;

  @ApiProperty()
  direction: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  mine: string;

  @ApiProperty()
  students: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  canSpeakChinese: boolean;
}
