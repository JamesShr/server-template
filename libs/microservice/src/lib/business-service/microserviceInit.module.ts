import { DynamicModule, Module, Provider } from '@nestjs/common';
import {
  ClientOptions,
  ClientProxy,
  ClientProxyFactory,
  MicroserviceOptions,
} from '@nestjs/microservices';
import { BusinessServiceRpcService } from './rpc.service';

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
      provide: BusinessServiceRpcService,
      useFactory: (client: ClientProxy) =>
        new BusinessServiceRpcService(options.name, client),
      inject: [clientProxyToken],
    };

    return {
      module: BusinessServiceModule,
      providers: [clientProxyProvider, rpcServiceProvider],
      exports: [BusinessServiceRpcService],
    };
  }
}
