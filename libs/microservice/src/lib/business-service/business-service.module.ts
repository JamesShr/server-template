import { DynamicModule, Inject, Module, Provider } from '@nestjs/common';
import {
  ClientOptions,
  ClientProviderOptions,
  ClientProxy,
  ClientProxyFactory,
  ClientsModule,
  MicroserviceOptions,
} from '@nestjs/microservices';
import { RpcService } from './rpc.service';

@Module({})
export class BusinessServiceModule {
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
      provide: RpcService,
      useFactory: (client: ClientProxy) => new RpcService(options.name, client),
      inject: [clientProxyToken],
    };

    return {
      module: BusinessServiceModule,
      providers: [clientProxyProvider, rpcServiceProvider],
      exports: [RpcService],
    };
  }
}
