import { Module } from '@nestjs/common';
import { BusinessServiceModule } from '@server-template/microservice';

import { BUSINESS_SERVICE_CONNECTION } from './connections/businessService';

@Module({
  imports: [BusinessServiceModule.forRoot(BUSINESS_SERVICE_CONNECTION)],
  exports: [BusinessServiceModule],
})
export class MicroserviceModule {}
