import { Module } from '@nestjs/common';
import { GetModule } from './method/get/get.module';
import { AppController } from './method/get/app.controller';
import { AppService } from './service/app.service';
import { PostModule } from './method/post/post.module';
import { DeleteModule } from './method/delete/delete.module';
import { TodoService } from './service/todo.service';
import { TodoModule } from './method/todo/todo.module';

@Module({
  imports: [GetModule,PostModule,DeleteModule,TodoModule],
  controllers: [AppController],
  providers: [AppService,TodoService],
})
export class AppModule {}
