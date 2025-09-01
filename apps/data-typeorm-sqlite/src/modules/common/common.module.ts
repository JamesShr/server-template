import { Global, Module } from '@nestjs/common';
import { REDIS_CONFIG } from '../../config';
import { RedisModule } from '@server-template/redis';

@Global()
@Module({
  imports: [RedisModule.forRoot(REDIS_CONFIG)],
  exports: [RedisModule],
})
export class CommonModule {}
