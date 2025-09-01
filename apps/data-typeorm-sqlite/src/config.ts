import config from 'config';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RedisOptions } from 'ioredis';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ENTITIES } from './entities';
import { MIGRATIONS } from './migrations';

export const INFO_VERSION = config.get('version') as string;

// microservices
export const MICROSERVICE_NAME = config.get('microservice.name') as string;
export const MICROSERVICE_CONNECT_CONF = config.get(
  'microservice.connect',
) as MicroserviceOptions;

// redis
export const REDIS_CONFIG = config.get('redis') as RedisOptions;

// ormconfig
export const ormConfig: TypeOrmModuleOptions = {
  ...config.get('database'),
  entities: ENTITIES,
  migrations: MIGRATIONS,
};
