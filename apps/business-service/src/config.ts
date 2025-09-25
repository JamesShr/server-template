import * as path from 'path';
if (!process.env.NODE_CONFIG_DIR) {
  process.env.NODE_CONFIG_DIR = path.join(__dirname, '../config');
}
import config from 'config';
import { TcpClientOptions } from '@nestjs/microservices';
import { RedisOptions } from 'ioredis';
import { QueueType } from '@server-template/queue';

export const INFO_VERSION = config.get('version') as string;

// microservices
export const MICROSERVICE_NAME = config.get('microservice.name') as string;
export const MICROSERVICE_CONNECT_CONF = config.get(
  'microservice.connect',
) as TcpClientOptions;
export const MICROSERVICE_TIMEOUT = config.get(
  'microservice.timeout',
) as number;
export const MICROSERVICE_DATA_MANAGEMENT_NAME = config.get(
  'microservice.dataManagement.name',
) as string;

// redis
export const REDIS_CONFIG = config.get('redis') as RedisOptions;

// queue

export const QUEUE_TYPE = config.get<QueueType>('queue.type') as QueueType;