import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './modules/common/common.module';
import { BusinessModule } from './modules/business/business.module';
import { BusinessServiceModule } from '@server-template/microservice';
import {
  MICROSERVICE_BUSINESS_SERVICE_NAME,
  MICROSERVICE_CONNECT_CONF,
} from './config';

@Module({
  imports: [
    BusinessServiceModule.forRoot({
      name: MICROSERVICE_BUSINESS_SERVICE_NAME,
      connect: MICROSERVICE_CONNECT_CONF,
    }),
    CommonModule,
    BusinessModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
