/* eslint-disable @typescript-eslint/no-var-requires */
// const { version } = require('../package.json');

module.exports = {
  version: '0.0.1',

  database: {
    type: 'sqlite',
    database: 'records/data-typeorm-sqlite.db',
    logging: false,
    migrationsRun: true,
    cache: {
      type: 'ioredis',
      options: {
        connectionName: 'DATA_TYPEORM_SQLITE-DB_CACHE',
        host: '127.0.0.1',
        port: 6379,
        password: '',
      },
      duration: 1000 * 60 * 60 * 24,
    },
  },

  redis: {
    host: '127.0.0.1',
    connectionName:'DATA_TYPEORM_SQLITE',
    port: 6379,
    db: 0,
    password: '',
  },

  microservice: {
    name: 'DATA_TYPEORM_SQLITE',
    connect: {
      transport: 1, // REDIS
      options: {
        host: '127.0.0.1',
        port: 6379,
        db: 0,
        password: '',
        retryAttempts: 10, // 設定無限重試次數
        retryDelay: 3000, // 每次重試間隔 3 秒
      },
    },
    timeout: 5000,
  },
};
