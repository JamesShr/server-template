// Data Management
// export * as prismaDataManagement from './client/data-management';
export {
  PrismaClientModule as DataManagementPrismaClientModule,
  PrismaClientService as DataManagementPrismaClientService,
} from './client/data-management';
export type { Post, User } from './client/data-management';
