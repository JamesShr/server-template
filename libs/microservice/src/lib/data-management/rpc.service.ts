import {
  Injectable,
  Inject,
  Logger,
  OnApplicationBootstrap,
  HttpException,
} from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { catchError, lastValueFrom, throwError, timeout } from 'rxjs';
import { CreateUserDto, CreatePostDto } from '@server-template/dtos';
import { User, Post } from '@server-template/prisma';

@Injectable()
export class DataManagementServiceRpcService implements OnApplicationBootstrap {
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

  // user
  async createUser(user: CreateUserDto): Promise<User> {
    return await this.send('user.create', user);
  }

  // post
  async createPost(post: CreatePostDto): Promise<Post> {
    return await this.send('post.create', post);
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
