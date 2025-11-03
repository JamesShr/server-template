import {
  Injectable,
  // Inject,
  Logger,
  OnModuleDestroy,
} from '@nestjs/common';
import { Redis, RedisOptions } from 'ioredis';
// import { Subject } from 'rxjs';

@Injectable()
export class RedisService implements OnModuleDestroy{
  private client!: Redis;
  //   private sub: Redis;
  private connectOption: RedisOptions;
  //   private readonly expireSubject = new Subject<string>();

  constructor(options: Partial<RedisOptions>) {
    this.connectOption = Object.assign(
      {},
      { host: 'localhost', port: 6379, database: 0 },
      options
    );
    this.startRedis();
  }

  async startRedis(): Promise<void> {
    this.client = new Redis(this.connectOption);
    this.client.on('connect', () => {
      Logger.debug(`Connect to redis Successfully.`);
    });
    // await this.client.connect();
    // this.sub = new Redis(this.connectOption);
    // await this.sub.connect() ;
    // this.client.config('SET', 'notify-keyspace-events', 'Ex');
    // this.sub.subscribe(`__keyevent@0__:expired`);
    // this.sub.on('message', (channel, message) => {
    //   Logger.log(`Received ${message} from ${channel}`);
    //   this.expireSubject.next(message);
    // });
    //
  }

  getClient(): Redis {
    return this.client;
  }

  //   getExpireSubject(): Subject<string> {
  //     return this.expireSubject;
  //   }

  async onModuleDestroy() {
    if (this.client) {
      await this.client.quit();
      Logger.debug(`Redis connection closed.`);
    }
  }
}
