import { Injectable } from '@nestjs/common';
import { CreatePostDto, CreateUserDto } from '@server-template/dtos';
// import { RedisService } from '@server-template/redis';
import { BusinessServiceRpcService } from '@server-template/microservice';

@Injectable()
export class BusinessService {
  constructor(
    // private readonly redisService: RedisService,
    private readonly businessServiceRpcService: BusinessServiceRpcService
) {}

  async healthcheck() {
    return this.businessServiceRpcService.healthcheck();
  }

  // blog create user
  async blogCreateUser(user: CreateUserDto) {
    return this.businessServiceRpcService.blogCreateUser(user);
  }

  // blog create post
  async blogCreatePost(post: CreatePostDto) {
    return this.businessServiceRpcService.blogCreatePost(post);
  }
}
