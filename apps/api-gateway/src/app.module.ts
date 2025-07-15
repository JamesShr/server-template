import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './modules/common/common.module';
import { BusinessModule } from './modules/business/business.module';
import { MicroserviceModule } from './modules/microservice/microservice.module';

@Module({
  imports: [
    CommonModule,
    BusinessModule,
    MicroserviceModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
