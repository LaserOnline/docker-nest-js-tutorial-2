import { Controller,Delete,Param } from '@nestjs/common';
import { AppService } from 'src/service/app.service';

@Controller('delete')
export class DeleteController {

    constructor(private readonly appService: AppService) {}
    
    @Delete("/:id")
    deleteById(@Param("id") id:string){
        console.log(`Id ${id}`)
        return this.appService.Delete1(id)
    }

    @Delete("/:id/:name")
    deleteByIdAndName(@Param("id") id: string, @Param("name") name: string){
        console.log(`Id ${id}, Name ${name}`);
        return this.appService.Delete2(id,name)
    }

}
