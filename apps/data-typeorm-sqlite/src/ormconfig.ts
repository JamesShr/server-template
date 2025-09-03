import { DataSource, DataSourceOptions } from 'typeorm';
import config from 'config';
import { DATA_TYPEORM_SQLITE_ENTITIES } from '@server-template/typeorm-entities';
import { DATA_TYPEORM_SQLITE_MIGRATIONS } from '@server-template/typeorm-migrations';

const ormConfig: DataSourceOptions = {
  ...config.get('database'),
  entities: DATA_TYPEORM_SQLITE_ENTITIES,
  migrations: DATA_TYPEORM_SQLITE_MIGRATIONS,
};

const dataSource = new DataSource(ormConfig);

export default dataSource;
