import { MICROSERVICE_CONNECT_CONF, MICROSERVICE_DATA_MANAGEMENT_NAME, MICROSERVICE_NAME, MICROSERVICE_TIMEOUT } from "../../../config";
import { MicroserviceOptions } from "@nestjs/microservices";

export const DATA_MANAGEMENT_CONNECTION = {
    name: MICROSERVICE_DATA_MANAGEMENT_NAME,
    connect: {
      transport: MICROSERVICE_CONNECT_CONF.transport,
      options: {
        ...MICROSERVICE_CONNECT_CONF.options,
        connectionName: `${MICROSERVICE_NAME}-${MICROSERVICE_DATA_MANAGEMENT_NAME}`,
      },
    } as MicroserviceOptions,
  timeout: MICROSERVICE_TIMEOUT,
};