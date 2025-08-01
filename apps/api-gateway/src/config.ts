import config from 'config';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RedisOptions } from 'ioredis';

export const INFO_VERSION = config.get('version') as string;

// port
export const PORT_HTTP = config.get('port.http') as number;

// microservices
export const MICROSERVICE_NAME = config.get('microservice.name') as string;
export const MICROSERVICE_CONNECT_CONF = config.get(
  'microservice.connect',
) as MicroserviceOptions;
export const MICROSERVICE_BUSINESS_SERVICE_NAME = config.get(
  'microservice.businessService.name',
) as string;

// redis
export const REDIS_CONFIG = config.get('redis') as RedisOptions;