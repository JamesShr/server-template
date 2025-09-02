/* eslint-disable @typescript-eslint/no-var-requires */
const { version } = require('../package.json');

module.exports = {
  version,

  redis: {
    connectionName: 'BUSINESS_SERVICE',
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    password: '',
  },

  microservice: {
    name: 'BUSINESS_SERVICE',
    connect: {
      transport: 1, // REDIS
      options: {
        connectionName: 'BUSINESS_SERVICE',
        host: '127.0.0.1',
        port: 6379,
        db: 0,
        password: '',
        retryAttempts: 10, // 設定無限重試次數
        retryDelay: 3000, // 每次重試間隔 3 秒
      },
    },
    timeout: 5000,
    dataManagement: {
      name: 'DATA_MANAGEMENT',
    },
  },
};
