import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MICROSERVICE_NAME } from './config';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @MessagePattern(`${MICROSERVICE_NAME}.healthcheck`)
  getData() {
    return 'Hello I am business service';
  }
}
