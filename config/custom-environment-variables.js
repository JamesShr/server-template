module.exports = {
  port: {
    http: {
      __name: 'PORT_HTTP',
      __format: 'json',
    },
  },

  database: {
    dataManagement: {
      url: 'DATABASE_DATA_MANAGEMENT_URL',
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
    apiGateway: {
      name: 'MICROSERVICE_API_GATEWAY_NAME',
    },
    businessService: {
      name: 'MICROSERVICE_BUSINESS_SERVICE_NAME',
    },
    dataManagement: {
      name: 'MICROSERVICE_DATA_MANAGEMENT_NAME',
    },
  },
};
