import {
  Injectable,
  Inject,
  Logger,
  OnApplicationBootstrap,
  HttpException,
} from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { catchError, lastValueFrom, throwError, timeout } from 'rxjs';
import { CreatePostDto, CreateUserDto } from '@server-template/dtos';
import { Post, User } from '@server-template/prisma';

@Injectable()
export class BusinessServiceRpcService implements OnApplicationBootstrap {
  constructor(
    private readonly name: string,
    private readonly client: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    try {
      await this.client.connect();
      Logger.debug(`service ${this.name} connect success`);
    } catch (error) {
      Logger.error(`service ${this.name} connect fail`);
    }
  }

  // healthcheck
  async healthcheck(): Promise<string> {
    return await this.send('healthcheck', {});
  }

  // blog create user
  async blogCreateUser(user: CreateUserDto): Promise<User> {
    return await this.send('blog.createUser', user);
  }

  // blog create post
  async blogCreatePost(post: CreatePostDto): Promise<Post> {
    return await this.send('blog.createPost', post);
  }

  private async send(topic: string, data: any): Promise<any> {
    return await lastValueFrom(
      this.client.send(`${this.name}.${topic}`, data).pipe(
        timeout(5000),
        catchError((error) =>
          throwError(() => new HttpException(error.message, error.error.code))
        )
      )
    );
  }
}
