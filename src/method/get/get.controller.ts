import { Controller,Get } from '@nestjs/common';
import { AppService } from 'src/service/app.service';
@Controller('get') // * Path แม่ 

export class GetController {
    constructor(private readonly appService: AppService) {}

    @Get('/test/1')
    test1() {
        return this.appService.getTest();
    }

    @Get('/test/2')
    test2(){
        return this.appService.getObject();
    }

}
