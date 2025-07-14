import { DynamicModule, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({})
export class PrismaClientDataManagementModule {
  static forRoot(options: Partial<{ url: string }>): DynamicModule {
    return {
      module: PrismaClientDataManagementModule,
      providers: [
        {
          provide: PrismaService,
          useValue: new PrismaService(options),
        },
      ],
      exports: [
        {
          provide: PrismaService,
          useValue: new PrismaService(options),
        },
      ],
    };
  }
}
