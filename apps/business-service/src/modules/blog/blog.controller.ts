import { Body, Controller, Logger } from '@nestjs/common';
import { BlogService } from './blog.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreatePostDto, CreateUserDto } from '@server-template/dtos';
import { MICROSERVICE_NAME } from '../../config';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @MessagePattern(`${MICROSERVICE_NAME}.blog.createUser`)
  async createUser(@Body() user: CreateUserDto) {
    Logger.debug(`createUser: ${JSON.stringify(user)}`);
    return this.blogService.createUser(user);
  }

  @MessagePattern(`${MICROSERVICE_NAME}.blog.createPost`)
  async createPost(@Body() post: CreatePostDto) {
    return this.blogService.createPost(post);
  }
}
