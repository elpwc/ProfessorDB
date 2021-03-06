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
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';

const PORT = 3005;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // 全局注册错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // swagger
  const config = new DocumentBuilder()
    .setTitle('ProfessorDB API')
    .setDescription('')
    .setVersion('1.0.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => {
      console.log(
        controllerKey,
        methodKey,
        methodKey + controllerKey.substring(0, controllerKey.length - 10),
      );
      return methodKey + controllerKey.substring(0, controllerKey.length - 10);
    },
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('/api', app, document);

  // swagger stop

  app.setGlobalPrefix('api/v1');
  // app.use(helmet());

  app.use(
    cors({
      origin: 'http://localhost:3004',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type'],
    }),
  );

  await app.listen(PORT, () => {
    Logger.log('start');
  });
}
bootstrap();
