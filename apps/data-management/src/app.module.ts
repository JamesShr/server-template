import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataManagementPrismaClientModule } from '@server-template/prisma';
import { DATABASE_URL } from './config';

@Module({
  imports: [
    DataManagementPrismaClientModule.forRoot({
      url: DATABASE_URL,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
