import { Global, Module } from '@nestjs/common';
import { RedisModule } from '@server-template/redis';
import { DATABASE_URL, REDIS_CONFIG } from '../../config';
import { AccountManagementPrismaClientModule } from '@server-template/prisma';

@Global()
@Module({
  imports: [
    RedisModule.forRoot(REDIS_CONFIG),
    AccountManagementPrismaClientModule.forRoot({
      url: DATABASE_URL,
    }),
  ],
  exports: [RedisModule, AccountManagementPrismaClientModule],
})
export class CommonModule {}
