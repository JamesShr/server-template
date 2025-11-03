// kafka-queue.service.ts
import { Injectable } from '@nestjs/common';
import { QueueService } from './queue.interface';
// 假設你用 kafkajs 或 @nestjs/microservices 的 Kafka client

@Injectable()
export class KafkaQueueService<INPUT = any, OUTPUT = any>
  implements QueueService<INPUT, OUTPUT>
{
  // constructor(private readonly kafka: KafkaClient) {}

  async send(queueName: string, jobs: INPUT[]): Promise<void> {
    // await this.kafka.send(...)
  }

  async get(queueName: string): Promise<OUTPUT> {
    // return await this.kafka.consume(...)
    return {} as OUTPUT;
  }
}
