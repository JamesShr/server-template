export const QUEUE_SERVICE = Symbol('QUEUE_SERVICE');

export interface QueueService<INPUT = any, OUTPUT = any> {
  send(queueName: string, jobs: INPUT[]): Promise<void>;
  get(queueName: string): Promise<OUTPUT>;
}
