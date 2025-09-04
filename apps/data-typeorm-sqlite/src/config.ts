import * as path from 'path';
if (!process.env.NODE_CONFIG_DIR) {
  if (process.env.POSITION === 'relative') {
    process.env.NODE_CONFIG_DIR = path.join(__dirname, '../config');
  } else {
    process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '../config');
  }
}

import config from 'config';
import { TcpClientOptions } from '@nestjs/microservices';
import { RedisOptions } from 'ioredis';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATA_TYPEORM_SQLITE_ENTITIES } from '@server-template/typeorm-entities';
import { DATA_TYPEORM_SQLITE_MIGRATIONS } from '@server-template/typeorm-migrations';

export const INFO_VERSION = config.get('version') as string;

// microservices
export const MICROSERVICE_NAME = config.get('microservice.name') as string;
export const MICROSERVICE_CONNECT_CONF = config.get(
  'microservice.connect',
) as TcpClientOptions;
export const MICROSERVICE_TIMEOUT = config.get(
  'microservice.timeout',
) as number;

// redis
export const REDIS_CONFIG = config.get('redis') as RedisOptions;

// ormconfig
export const ormConfig: TypeOrmModuleOptions = {
  ...config.get('database'),
  entities: DATA_TYPEORM_SQLITE_ENTITIES,
  migrations: DATA_TYPEORM_SQLITE_MIGRATIONS,
};
