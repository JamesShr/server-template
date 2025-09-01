import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './modules/common/common.module';
import { MicroserviceModule } from './modules/microservice/microservice.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), CommonModule, MicroserviceModule, TestModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
