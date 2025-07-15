import { Module } from '@nestjs/common';
import { BusinessServiceModule } from '@server-template/microservice';

import {
  MICROSERVICE_BUSINESS_SERVICE_NAME,
  MICROSERVICE_CONNECT_CONF,
} from '../../config';

@Module({
  imports: [
    BusinessServiceModule.forRoot({
      name: MICROSERVICE_BUSINESS_SERVICE_NAME,
      connect: MICROSERVICE_CONNECT_CONF,
    }),
  ],
})
export class MicroserviceModule {}
