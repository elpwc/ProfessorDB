import { ApiProperty } from '@nestjs/swagger';

export class PageDto {
  @ApiProperty()
  current: number;

  @ApiProperty()
  size: number;
}
