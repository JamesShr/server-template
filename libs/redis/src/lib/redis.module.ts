import { DynamicModule, Module } from '@nestjs/common';
import { RedisOptions } from 'ioredis';
import { RedisService } from './redis.service';

@Module({})
export class RedisModule {
  static forRoot(options: Partial<RedisOptions>): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: 'REDIS_OPTIONS',
          useValue: options,
        },
        {
          provide: RedisService,
          useFactory: (opts: Partial<RedisOptions>) => new RedisService(opts),
          inject: ['REDIS_OPTIONS'],
        },
      ],
      exports: [RedisService],
    };
  }
}