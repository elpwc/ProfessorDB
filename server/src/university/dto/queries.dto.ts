import { ApiProperty } from '@nestjs/swagger';

export class UniversityQueryDto {
  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  position: string;
}
