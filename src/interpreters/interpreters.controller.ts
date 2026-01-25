import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InterpretersService } from './interpreters.service';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { Interpreter } from './interpreter.schema';

@Controller('interpreters')
export class InterpretersController {
  constructor(private readonly service: InterpretersService) {
    console.log('Interpreter controller loaded');
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() createInterpreterDto: Interpreter) {
    return this.service.createInterpreter(createInterpreterDto);
  }
}
