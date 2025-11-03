// redis-queue.service.ts
import { Injectable } from '@nestjs/common';
import { QueueService } from './queue.interface';
import { RedisService } from '@server-template/redis';

@Injectable()
export class RedisQueueService<INPUT = any, OUTPUT = any>
  implements QueueService<INPUT, OUTPUT>
{
  constructor(private readonly redisService: RedisService) {}

  async send(queueName: string, jobs: INPUT[]): Promise<void> {
    await Promise.all(
      jobs.map((job) =>
        this.redisService.getClient().lpush(queueName, JSON.stringify(job)),
      ),
    );
  }

  async get(queueName: string): Promise<OUTPUT> {
    const conn = await this.redisService.getClient().rpop(queueName);
    return JSON.parse(conn as string) as OUTPUT;
  }
}
