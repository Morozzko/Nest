import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {initSwagger} from "./init/swagger";
import {initFileSystem} from "./init/fileSystem";

async function bootstrap() {
  const PORT = process.env.PORT || 7000

  const app = await NestFactory.create(AppModule)

  app.enableCors()
  app.setGlobalPrefix('/api/v1')
  app.useGlobalPipes(new ValidationPipe())

  initSwagger(app)
  initFileSystem()

  await app.listen(PORT);
}
bootstrap();
