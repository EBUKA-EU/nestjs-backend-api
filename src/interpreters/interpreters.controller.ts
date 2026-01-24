import { Controller, Get } from '@nestjs/common';
import { InterpretersService } from './interpreters.service';

@Controller('interpreters')
export class InterpretersController {
    constructor(private readonly service: InterpretersService){}

    @Get()
    findAll(){
        return this.service.findAll();
    }
}
