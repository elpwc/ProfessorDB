import { ApiProperty } from '@nestjs/swagger';

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
}
