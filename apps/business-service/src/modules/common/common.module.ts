import { Global, Module } from '@nestjs/common';
import { QUEUE_TYPE, REDIS_CONFIG } from '../../config';
import { RedisModule } from '@server-template/redis';
import { QueueModule } from '@server-template/queue';
@Global()
@Module({
  imports: [
    RedisModule.forRoot(REDIS_CONFIG),
    QueueModule.forRootAsync(QUEUE_TYPE),
  ],
  exports: [RedisModule, QueueModule],
})
export class CommonModule {}
