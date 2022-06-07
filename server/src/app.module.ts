import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProfessorModule } from './professor/professor.module';
import { ProfessorCommentModule } from './professor_comment/professor_comment.module';
import * as dbcfg from '../dbcfg';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'professordb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      ...dbcfg.default,
    }),
    UserModule,
    ProfessorModule,
    ProfessorCommentModule,
  ],
})
export class AppModule {}
