import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TestRepository } from './test.repository';
import { RedisService } from '@server-template/redis';
import { parseRedisClientList } from '@server-template/utils';

@Injectable()
export class TestService implements OnApplicationBootstrap {
  constructor(
    private readonly testRepository: TestRepository,
    private readonly redis: RedisService,
  ) {}

  async onApplicationBootstrap() {
    setInterval(async () => {
      await this.testRepository.save(
        this.testRepository.toEntity({ time: Date.now() }),
      );
      const list = (await this.redis.getClient().client('LIST')) as string;
      console.log({ list: parseRedisClientList(list) });
    }, 5000);
  }
}
