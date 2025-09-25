// queue.module.ts
import { DynamicModule, Module } from '@nestjs/common';
import { QUEUE_SERVICE } from './queue.interface';
import { RedisQueueService } from './redis-queue.service';
import { KafkaQueueService } from './kafka-queue.service';
import { RedisModule } from '@server-template/redis';

export type QueueType = 'redis' | 'kafka';

@Module({})
export class QueueModule {
  static forRootAsync(type: QueueType): DynamicModule {
    const provider = {
      provide: QUEUE_SERVICE,
      useClass: type === 'redis' ? RedisQueueService : KafkaQueueService,
    };

    return {
      module: QueueModule,
      imports: type === 'redis' ? [RedisModule] : [],
      providers: [provider],
      exports: [provider],
    };
  }
}
