import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { AppService } from 'src/service/app.service';
import { TodoService } from 'src/service/todo.service';

@Module({
    controllers: [PostController],
    providers: [AppService,TodoService]
})
export class PostModule {}
