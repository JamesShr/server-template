import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { INFO_VERSION } from './config';
import { OkInterceptor } from '@server-template/interceptors';

@Controller()
@UseInterceptors(OkInterceptor)
export class AppController {
  constructor() {}

  @Get()
  getData() {
    return INFO_VERSION;
  }
}
