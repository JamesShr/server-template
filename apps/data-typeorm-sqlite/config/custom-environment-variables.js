module.exports = {
  database: {
    type: 'DATABASE_TYPE',
    database: 'DATABASE_DATABASE',
    logging: {
      __name: 'DATABASE_LOGGING',
      __format: 'json',
    },
    migrationsRun: {
      __name: 'DATABASE_MIGRATION_RUN',
      __format: 'json',
    },
    cache: {
      type: 'DATABASE_CACHE_TYPE',
      options: {
        connectionName: 'DATABASE_CACHE_OPTIONS_CONNECTION_NAME',
        host: {
          __name: 'DATABASE_CACHE_OPTIONS_HOST',
          __format: 'json',
        },
        port: {
          __name: 'DATABASE_CACHE_OPTIONS_PORT',
          __format: 'json',
        },
        password: 'DATABASE_CACHE_OPTIONS_PASSWORD',
      },
      duration: {
        __name: 'DATABASE_CACHE_DURATION',
        __format: 'json',
      },
    },
  },

  redis: {
    host: 'REDIS_HOST',
    port: {
      __name: 'REDIS_PORT',
      __format: 'json',
    },
    db: {
      __name: 'REDIS_DB',
      __format: 'json',
    },
    password: 'REDIS_PASSWORD',
  },

  microservice: {
    name: 'MICROSERVICE_NAME',
    connect: {
      transport: {
        __name: 'MICROSERVICE_CONNECT_TRANSPORT',
        __format: 'json',
      },
      options: {
        host: 'MICROSERVICE_CONNECT_OPTIONS_HOST',
        port: {
          __name: 'MICROSERVICE_CONNECT_OPTIONS_PORT',
          __format: 'json',
        },
        db: {
          __name: 'MICROSERVICE_CONNECT_OPTIONS_DB',
          __format: 'json',
        },
        password: 'MICROSERVICE_CONNECT_OPTIONS_PASSWORD',
        retryAttempts: {
          __name: 'MICROSERVICE_CONNECT_OPTIONS_RETRY_ATTEMPTS',
          __format: 'json',
        },
        retryDelay: {
          __name: 'MICROSERVICE_CONNECT_OPTIONS_RETRY_DELAY',
          __format: 'json',
        },
      },
    },
    timeout: {
      __name: 'MICROSERVICE_TIMEOUT',
      __format: 'json',
    },
  },
};
