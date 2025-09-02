import { Module } from '@nestjs/common';
import { DataManagementServiceModule } from '@server-template/microservice';
import { DATA_MANAGEMENT_CONNECTION } from './connections/dataManagement';

@Module({
  imports: [DataManagementServiceModule.forRoot(DATA_MANAGEMENT_CONNECTION)],
  exports: [DataManagementServiceModule],
})
export class MicroserviceModule {}
