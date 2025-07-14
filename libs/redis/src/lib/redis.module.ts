import { DynamicModule, Module } from '@nestjs/common';
import { RedisOptions } from 'ioredis';
import { RedisService } from './redis.service';

@Module({})
export class RedisModule {
  static forRoot(options: Partial<RedisOptions>): DynamicModule {
    const providers = [
      {
        provide: RedisService,
        useValue: new RedisService(options),
      },
    ];
    return {
      providers: providers,
      exports: providers,
      module: RedisModule,
    };
  }
}
