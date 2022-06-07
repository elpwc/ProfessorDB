import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { Logger } from '@nestjs/common';

const PORT = 3005;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // swagger
  const config = new DocumentBuilder()
    .setTitle('ProfessorDB API')
    .setDescription('')
    .setVersion('1.0.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => {
      return controllerKey + methodKey;
    },
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('/api', app, document);

  // swagger stop

  app.setGlobalPrefix('api/v1');
  // app.use(helmet());

  app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type'],
    }),
  );

  await app.listen(PORT, () => {
    Logger.log('start');
  });
}
bootstrap();
