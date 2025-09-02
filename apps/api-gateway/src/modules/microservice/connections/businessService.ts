import { MicroserviceOptions } from '@nestjs/microservices';
import {
  MICROSERVICE_BUSINESS_SERVICE_NAME,
  MICROSERVICE_CONNECT_CONF,
  MICROSERVICE_NAME,
  MICROSERVICE_TIMEOUT,
} from '../../../config';

export const BUSINESS_SERVICE_CONNECTION = {
  name: MICROSERVICE_BUSINESS_SERVICE_NAME,
  connect: {
    transport: MICROSERVICE_CONNECT_CONF.transport,
    options: {
      ...MICROSERVICE_CONNECT_CONF.options,
      connectionName: `${MICROSERVICE_NAME}-${MICROSERVICE_BUSINESS_SERVICE_NAME}`,
    },
  } as MicroserviceOptions,
  timeout: MICROSERVICE_TIMEOUT,
};
