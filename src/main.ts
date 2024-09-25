import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ExceptionHandlerFilter } from './filters';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalFilters(new ExceptionHandlerFilter())
  app.useGlobalPipes(new ValidationPipe())
  app.use(morgan('tiny'))

  await app.listen(3000,() => { 
    console.log('Assalomu alekum 3000')
  });
} 
bootstrap();
