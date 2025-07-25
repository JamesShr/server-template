// Data Management
// export * as prismaDataManagement from './client/data-management';
export {
  PrismaClientModule as DataManagementPrismaClientModule,
  PrismaClientService as DataManagementPrismaClientService,
} from './client/data-management';
export type { Post, User } from './client/data-management';

export {
  PrismaClientModule as DeviceManagementPrismaClientModule,
  PrismaClientService as DeviceManagementPrismaClientService,
} from './client/device-management';
// export type * from './client/device-management';

export {
  PrismaClientModule as AccountManagementPrismaClientModule,
  PrismaClientService as AccountManagementPrismaClientService,
} from './client/account-management';
// export type * from './client/account-management';

export {
  PrismaClientModule as PostManagementPrismaClientModule,
  PrismaClientService as PostManagementPrismaClientService,
} from './client/post-management';
// export type * from './client/post-management';

export {
  PrismaClientModule as PostManagementPrismaClientModule,
  PrismaClientService as PostManagementPrismaClientService,
} from './client/post-management';
// export type * from './client/post-management';
