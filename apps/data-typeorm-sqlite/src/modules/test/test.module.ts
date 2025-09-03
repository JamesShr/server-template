import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { DataTypeormSqliteTestEntity } from '@server-template/typeorm-entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestRepository } from './test.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DataTypeormSqliteTestEntity])],
  providers: [TestService, TestRepository],
})
export class TestModule {}
