import { Controller,Get,Post, Body, Delete, Param, Patch, NotFoundException } from '@nestjs/common';
import { TodoService } from 'src/service/todo.service';

@Controller('todo')
export class TodoController {

    constructor(private todoService:TodoService){}
    
    @Post("/add") 
    Add(@Body("title") title:string, @Body("subtitle") subtitle:string){
        this.todoService.addTodo(title,subtitle)
        return [
            {
               "Message":"Successfully"
            },
            this.todoService.todoArray
        ]
    }

    @Get("/get")
    Data() {
        return this.todoService.getTodo()
    }
    
    @Delete("/:id")
    deleteTodoById(@Param("id") id:string){
        let numId = parseInt(id);
        return this.todoService.removeTodoById(numId)
    }

    @Patch("/:id")
    PatchTodo(
    @Param('id') id: string,
    @Body('title') title: string
    ){
        let numId = parseInt(id);
        if (title == null) {
            throw new NotFoundException(`Message Null`)
        } else {
            this.todoService.updateTodo(numId,title)
             return { message: 'Todo updated successfully'};
        }
    }

}
