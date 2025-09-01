import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestEntity } from '../../entities/test.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestRepository } from './test.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])],
  providers: [TestService, TestRepository],
})
export class TestModule {}
