import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './modules/common/common.module';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    CommonModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
