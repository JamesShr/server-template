import { DynamicModule, Module, Provider } from '@nestjs/common';
import {
  ClientOptions,
  ClientProxy,
  ClientProxyFactory,
  MicroserviceOptions,
} from '@nestjs/microservices';
import { DataTypeormSqliteRpcService } from './rpc.service';

@Module({})
export class DataTypeormSqliteModule {
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
      provide: DataTypeormSqliteRpcService,
      useFactory: (client: ClientProxy) =>
        new DataTypeormSqliteRpcService(options.name, client),
      inject: [clientProxyToken],
    };

    return {
      module: DataTypeormSqliteModule,
      providers: [clientProxyProvider, rpcServiceProvider],
      exports: [DataTypeormSqliteRpcService],
    };
  }
}
