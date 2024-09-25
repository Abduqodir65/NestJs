import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ExceptionHandlerFilter } from './filters';
import * as morgan from 'morgan';
import { BadRequestException, HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalFilters(new ExceptionHandlerFilter())

  app.useGlobalPipes(new ValidationPipe({
      exceptionFactory(errors) {
        const errorMags = errors.map((err) => Object.values(err.constraints).join(', '))
        throw new BadRequestException(errorMags.join(' && '))
      }
  }))

  app.use(morgan('tiny'))

  await app.listen(3000,() => { 
    console.log('Assalomu alekum 3000')
  });
} 
bootstrap();
