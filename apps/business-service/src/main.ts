/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { MICROSERVICE_CONNECT_CONF } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    MICROSERVICE_CONNECT_CONF,
  );
  await app.listen();
  Logger.debug(`[business-service] server init`);
}

bootstrap();
