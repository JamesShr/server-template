import config from 'config';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RedisOptions } from 'ioredis';

export const INFO_VERSION = config.get('version') as string;

//database
export const DATABASE_URL = config.get('database.postManagement.url') as string;

// microservices
export const MICROSERVICE_NAME = config.get(
  'microservice.postManagement.name'
) as string;
export const MICROSERVICE_CONNECT_CONF = config.get(
  'microservice.connect'
) as MicroserviceOptions;

// redis
export const REDIS_CONFIG = config.get('redis') as RedisOptions;
