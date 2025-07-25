/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT_HTTP } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT_HTTP, () => {
    Logger.log(
      `🚀 Application is running on: http://localhost:${PORT_HTTP}`,
    );
  });
}

bootstrap();
