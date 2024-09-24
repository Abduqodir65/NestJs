import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000,() => {
    console.log('Assalomu alekum 3000')
  });
} 
bootstrap();
