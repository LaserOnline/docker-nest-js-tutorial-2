import { Controller,Get } from '@nestjs/common';
import { AppService } from 'src/service/app.service';
import { TodoService } from 'src/service/todo.service';

@Controller('/')
export class AppController {

    private myFunctions: any;
    private todo:any;

    constructor(private  appService: AppService,
        private  todoService:TodoService
    ) {
        this.myFunctions = this.todoService.TestFunc()
    }

    @Get()
    Start() {
        return this.appService.Message()
    }

    @Get("/func1")
    Test1() {
        return this.myFunctions.function1();
    }

    @Get("/func2")
    Test2() {
        return this.myFunctions.function2();
    }

}
