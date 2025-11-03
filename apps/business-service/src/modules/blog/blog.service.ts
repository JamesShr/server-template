import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DataManagementServiceRpcService } from '@server-template/microservice';
import { CreateUserDto, CreatePostDto } from '@server-template/dtos';
import { QUEUE_SERVICE } from '@server-template/queue';
import type { QueueService } from '@server-template/queue';

@Injectable()
export class BlogService implements OnApplicationBootstrap {
  constructor(
    private readonly dataManagementServiceRpcService: DataManagementServiceRpcService,
    @Inject(QUEUE_SERVICE) // 用 token 來找到對應的實作
    private readonly queueService: QueueService<
      { time: number },
      { time: number }
    >,
  ) {}

  async onApplicationBootstrap() {
    setInterval(async () => {
      await this.queueService.send('blog', [{ time: Date.now() }]);
    }, 5000);

    setInterval(async () => {
      const job = await this.queueService.get('blog');
      console.log({ job });
    }, 1000);
  }

  // create user
  async createUser(user: CreateUserDto) {
    return this.dataManagementServiceRpcService.createUser(user);
  }

  // create post
  async createPost(post: CreatePostDto) {
    return this.dataManagementServiceRpcService.createPost(post);
  }
}
