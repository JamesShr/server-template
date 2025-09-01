import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService implements OnApplicationBootstrap {
  constructor(private readonly testRepository: TestRepository) {}

  async onApplicationBootstrap() {
    setInterval(async () => {
      const result = await this.testRepository.save(
        this.testRepository.toEntity({ time: Date.now() }),
      );
      console.log(result);
    }, 1000);
  }
}
