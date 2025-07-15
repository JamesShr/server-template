import { Body, Controller } from '@nestjs/common';
import { Post } from '@server-template/prisma';
import { PostService } from './post.service';
import { MessagePattern } from '@nestjs/microservices';
import { MICROSERVICE_NAME } from '../../config';
import { CreatePostDto } from '@server-template/dtos';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern(`${MICROSERVICE_NAME}.post.create`)
  async createPost(
    @Body()
    post: CreatePostDto
  ): Promise<Post> {
    return this.postService.createPost(post);
  }
}
