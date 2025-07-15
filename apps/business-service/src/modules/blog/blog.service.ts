import { Injectable } from '@nestjs/common';
import { DataManagementServiceRpcService } from '@server-template/microservice';
import { CreateUserDto, CreatePostDto } from '@server-template/dtos';

@Injectable()
export class BlogService {
  constructor(
    private readonly dataManagementServiceRpcService: DataManagementServiceRpcService
  ) {}

  // create user
  async createUser(user: CreateUserDto) {
    return this.dataManagementServiceRpcService.createUser(user);
  }

  // create post
  async createPost(post: CreatePostDto) {
    return this.dataManagementServiceRpcService.createPost(post);
  }
}
