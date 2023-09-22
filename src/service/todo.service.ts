import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from 'src/module/todo.entify';

@Injectable()
export class TodoService {

    todoArray:Todo[] = [];
    private nextId = 1;

    addTodo(title: string, subtitle: string) {
        const todo: Todo = {
            id: this.nextId++,
            title: title,
            subscribe: subtitle
        };
        this.todoArray.push(todo);
        console.log(`${JSON.stringify(this.todoArray)}`)
    }

    getTodo() {
        console.log(`${JSON.stringify(this.todoArray)}`)
        return this.todoArray
    }

    removeTodoById(id:number){
        const foundIndex = this.todoArray.findIndex(item => item.id === id);
        console.log(`${foundIndex}`)
        if (foundIndex === -1) {
            throw new NotFoundException(`Todo with ${id} Not Found`);
        } else {
            return this.todoArray.splice(foundIndex, 1);
        }
    }

    updateTodo(id:number, title:string){
        const foundIndex = this.todoArray.findIndex(item => item.id === id);
        console.log(`${foundIndex}`)
        
        if (foundIndex === -1) {
            throw new NotFoundException(`Todo with ${id} Not Found`);
        } else {
            this.todoArray[foundIndex].title = title;
            return this.todoArray[foundIndex];
        }
    }
    

    PostTodo(message:string) {0
        return {
            Message: [
                {
                    message: message
                }
            ]
        }
    }
    
    

    TestFunc() {
        let counter = 0;
        return {
            function1() {
                counter += 1;
                return `You've called this function 1 ${counter} times.`;
            },
            function2() {
                counter +=1;
                return `You've called this function 2 ${counter} times.`;
            }
        }
    }

}
