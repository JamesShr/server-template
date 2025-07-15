import {
  Body,
  Controller,
  Get,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { OkInterceptor } from '@server-template/interceptors';
import { CreatePostDto, CreateUserDto } from '@server-template/dtos';

@Controller('business')
@UseInterceptors(OkInterceptor)
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get('healthcheck')
  async healthcheck() {
    return this.businessService.healthcheck();
  }

  @Post('blog/user')
  async blogCreateUser(@Body() user: CreateUserDto) {
    return this.businessService.blogCreateUser(user);
  }

  @Post('blog/post')
  async blogCreatePost(@Body() post: CreatePostDto) {
    return this.businessService.blogCreatePost(post);
  }
}
