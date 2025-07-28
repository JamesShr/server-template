/* eslint-disable @typescript-eslint/no-var-requires */
const { version } = require('../package.json');

module.exports = {
  version,

  database: {
    url: 'postgresql://user:password@localhost:6432/data_management?schema=public',
  },

  redis: {
    name: 'DATA_MANAGEMENT',
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    password: '',
  },

  microservice: {
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
