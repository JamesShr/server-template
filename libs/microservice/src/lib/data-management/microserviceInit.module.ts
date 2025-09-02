import { DynamicModule, Inject, Module, Provider } from '@nestjs/common';
import {
  ClientOptions,
  ClientProviderOptions,
  ClientProxy,
  ClientProxyFactory,
  ClientsModule,
  MicroserviceOptions,
} from '@nestjs/microservices';
import { DataManagementServiceRpcService } from './rpc.service';

@Module({})
export class DataManagementServiceModule {
  static forRoot(options: {
    name: string;
    connect: MicroserviceOptions;
    timeout: number;
  }): DynamicModule {
    const clientProxyToken = `${options.name.toUpperCase()}`;
    const clientProxyProvider: Provider = {
      provide: clientProxyToken,
      useFactory: () =>
        ClientProxyFactory.create(options.connect as ClientOptions),
    };

    const rpcServiceProvider: Provider = {
      provide: DataManagementServiceRpcService,
      useFactory: (client: ClientProxy) =>
        new DataManagementServiceRpcService(
          options.name,
          client,
          options.timeout,
        ),
      inject: [clientProxyToken],
    };

    return {
      module: DataManagementServiceModule,
      providers: [clientProxyProvider, rpcServiceProvider],
      exports: [DataManagementServiceRpcService],
    };
  }
}
