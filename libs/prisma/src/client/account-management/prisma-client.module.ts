import { DynamicModule, Module } from '@nestjs/common';
import { PrismaClientService } from './prisma-client.service';

@Module({})
export class PrismaClientModule {
  static forRoot(options: Partial<{ url: string }>): DynamicModule {
    return {
      module: PrismaClientModule,
      providers: [
        {
          provide: PrismaClientService,
          useValue: new PrismaClientService(options),
        },
      ],
      exports: [
        {
          provide: PrismaClientService,
          useValue: new PrismaClientService(options),
        },
      ],
    };
  }
}
