import { Module } from '@nestjs/common';
import { DataManagementServiceModule } from '@server-template/microservice';
import {
  MICROSERVICE_DATA_MANAGEMENT_NAME,
  MICROSERVICE_CONNECT_CONF,
} from '../../config';

@Module({
  imports: [
    DataManagementServiceModule.forRoot({
      name: MICROSERVICE_DATA_MANAGEMENT_NAME,
      connect: MICROSERVICE_CONNECT_CONF,
    }),
  ],
  exports: [DataManagementServiceModule],
})
export class MicroserviceModule {}
