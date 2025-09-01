import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { TestEntity } from '../../entities/test.entity';

@Injectable()
export class TestRepository {
  constructor(
    @InjectRepository(TestEntity)
    private readonly testRepository: Repository<TestEntity>,
  ) {}

  toEntity(dto: { time: number; id?: number }): TestEntity {
    return {
      id: dto.id !== undefined ? dto.id : null,
      time: dto.time,
    } as TestEntity;
  }
  async save(dto: TestEntity): Promise<InsertResult> {
    const qb = this.testRepository
      .createQueryBuilder('test')
      .insert()
      .values(dto);
    return qb.execute();
  }

  async findAll(): Promise<TestEntity[]> {
    return this.testRepository.find();
  }
}
