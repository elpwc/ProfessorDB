import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { ApiTags } from '@nestjs/swagger';
import { UniversityQueryDto } from './dto/queries.dto';

@Controller('university')
@ApiTags('University')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Post()
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  }

  @Get()
  findAll(@Query() query: UniversityQueryDto) {
    if (query.name) {
      return this.universityService.search(query.name);
    } else {
      return this.universityService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUniversityDto: UpdateUniversityDto,
  ) {
    return this.universityService.update(+id, updateUniversityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universityService.remove(+id);
  }
}
