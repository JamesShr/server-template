import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { DataTypeormSqliteTestEntity } from '@server-template/typeorm-entities';

@Injectable()
export class TestRepository {
  constructor(
    @InjectRepository(DataTypeormSqliteTestEntity)
    private readonly testRepository: Repository<DataTypeormSqliteTestEntity>,
  ) {}

  toEntity(dto: { time: number; id?: number }): DataTypeormSqliteTestEntity {
    return {
      id: dto.id !== undefined ? dto.id : null,
      time: dto.time,
    } as DataTypeormSqliteTestEntity;
  }
  async save(dto: DataTypeormSqliteTestEntity): Promise<InsertResult> {
    const qb = this.testRepository
      .createQueryBuilder('test')
      .insert()
      .values(dto);
    return qb.execute();
  }

  async findAll(): Promise<DataTypeormSqliteTestEntity[]> {
    return this.testRepository.find();
  }
}
