import { Global, Module } from '@nestjs/common';
import { RedisModule } from '@server-template/redis';
import { DATABASE_URL, REDIS_CONFIG } from '../../config';
import { DeviceManagementPrismaClientModule } from '@server-template/prisma';

@Global()
@Module({
  imports: [
    RedisModule.forRoot(REDIS_CONFIG),
    DeviceManagementPrismaClientModule.forRoot({
      url: DATABASE_URL,
    }),
  ],
  exports: [RedisModule, DeviceManagementPrismaClientModule],
})
export class CommonModule {}
