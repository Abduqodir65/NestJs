import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ExceptionHandlerFilter } from './filters';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalFilters(new ExceptionHandlerFilter())
  app.useGlobalPipes()
  app.use(morgan('tiny'))

  await app.listen(3000,() => { 
    console.log('Assalomu alekum 3000')
  });
} 
bootstrap();
