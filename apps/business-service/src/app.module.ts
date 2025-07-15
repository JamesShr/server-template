import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './modules/common/common.module';
import { MicroserviceModule } from './modules/microservice/microservice.module';
import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [CommonModule, MicroserviceModule, BlogModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
