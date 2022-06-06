import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProfessorModule } from './professor/professor.module';
import { ProfessorCommentModule } from './professor_comment/professor_comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    ProfessorModule,
    ProfessorCommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
