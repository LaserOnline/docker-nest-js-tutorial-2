import { Body, Controller,Post,Get} from '@nestjs/common';
import { AppService } from 'src/service/app.service';
import { TodoService } from 'src/service/todo.service';

@Controller('/')
export class PostController {
    constructor(private readonly appService: AppService,
        private todoService:TodoService,
    ) {}
    
    @Post("/post1")
    postTodo(@Body("title") title:string, @Body("subtitle") subtitle:string){
        console.log(`title ${title} subtitle ${subtitle}`)
        return this.appService.Post1(title,subtitle)
    }

    @Post("/post2")
    Printer(@Body("message") message:string) {
        return this.todoService.PostTodo(message)
    }

}
