import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from './generated';

@Injectable()
export class PrismaClientService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(options: Partial<{ url: string }>) {
    const connOptions = Object.assign(
      {},
      {
        url: 'postgresql://user:password@localhost:5432/db?schema=public',
      },
      options
    );
    super({
      datasources: {
        db: {
          url: connOptions.url,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect()
      .then(() => {
        Logger.debug('Prisma connected');
      })
      .catch((error) => {
        Logger.error('Prisma connection error', error);
      });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
