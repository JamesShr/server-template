/* eslint-disable @typescript-eslint/no-var-requires */
const { version } = require('../package.json');

module.exports = {
  version,
  database: {
    url: 'postgresql://user:password@localhost:5432/db?schema=public',
  },

  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    password: '',
  },

  microservice: {
    name: 'DATA_MANAGEMENT',
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
  },
};
