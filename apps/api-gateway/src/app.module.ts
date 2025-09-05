import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './modules/common/common.module';
import { BusinessModule } from './modules/business/business.module';
import { MicroserviceModule } from './modules/microservice/microservice.module';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [CommonModule, BusinessModule, MicroserviceModule, TestModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
