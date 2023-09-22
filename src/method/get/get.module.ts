import { Module } from '@nestjs/common';
import { GetController } from './get.controller';
import { AppService } from 'src/service/app.service';
import { AppController } from './app.controller';
import { TodoService } from 'src/service/todo.service';

@Module({
    // * Controller
  controllers: [GetController, AppController],
  providers: [AppService,TodoService],
})
export class GetModule {}
