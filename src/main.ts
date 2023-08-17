import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: [
      'http://localhost:4200',
      'http://127.0.0.1:4200',
      'http://127.0.0.1:5000',
      'http://127.0.0.1:8080',
      'http://localhost:5000',
      'https://lmptraders.com',
      'https://www.lmptraders.com',
      'https://www.app.lmptraders.com',
      'https://app.lmptraders.com',
    ], credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
