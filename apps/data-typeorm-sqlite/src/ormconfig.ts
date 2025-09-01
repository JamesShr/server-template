import { DataSource, DataSourceOptions } from 'typeorm';
import config from 'config';
import { MIGRATIONS } from './migrations';
import { ENTITIES } from './entities';

const ormConfig: DataSourceOptions = {
  ...config.get('database'),
  entities: ENTITIES,
  migrations: MIGRATIONS,
};

const dataSource = new DataSource(ormConfig);

export default dataSource;