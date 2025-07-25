import { DynamicModule, Module, Provider } from '@nestjs/common';
import {
  ClientOptions,
  ClientProxy,
  ClientProxyFactory,
  MicroserviceOptions,
} from '@nestjs/microservices';
import { PostManagementRpcService } from './rpc.service';

@Module({})
export class PostManagementModule {
  static forRoot(options: {
    name: string;
    connect: MicroserviceOptions;
  }): DynamicModule {
    const clientProxyToken = `${options.name.toUpperCase()}`;
    const clientProxyProvider: Provider = {
      provide: clientProxyToken,
      useFactory: () =>
        ClientProxyFactory.create(options.connect as ClientOptions),
    };

    const rpcServiceProvider: Provider = {
      provide: PostManagementRpcService,
      useFactory: (client: ClientProxy) =>
        new PostManagementRpcService(options.name, client),
      inject: [clientProxyToken],
    };

    return {
      module: PostManagementModule,
      providers: [clientProxyProvider, rpcServiceProvider],
      exports: [PostManagementRpcService],
    };
  }
}
