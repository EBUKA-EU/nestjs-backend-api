import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InterpretersService } from './interpreters.service';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import {
  BadgeDto,
  CallDto,
  CreateInterpreterDto,
} from './dto/create-interpreter.dto';
import { UpdateInterpreterDto } from './dto/update-interpreter.dto';

import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('interpreters')
export class InterpretersController {
  constructor(private readonly service: InterpretersService) {
    console.log('Interpreter controller loaded');
  }

  // INTERPRETER COLLECTION ENDPOINTS

  // Get all interpreter documents
  // GET /interpreters
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // Get interpreter document by id
  // GET /interpreters/:id
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.service.findOne(id);
  }

  // Create interpreter document
  // POST /interpreters
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createInterpreterDto: CreateInterpreterDto) {
    return this.service.createInterpreter(createInterpreterDto);
  }

  // Update an interpreter document
  // PATCH /interpreters/:id
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateOne(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateInterpreter: UpdateInterpreterDto,
  ) {
    return this.service.updateInterpreter(id, updateInterpreter);
  }

  // Delete an interpreter document
  // DELETE /profiles/:id
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.service.deleteInterpreter(id);
  }

  // EMBEDDED DOCUMENTS ENDPOINT
  // Get calls for a particular interpreter document
  // GET /interpreters/:id/calls
  @Get(':id/calls')
  async getCalls(@Param('id', ParseObjectIdPipe) id: string) {
    const interpreter = await this.service.findOne(id);
    return interpreter.calls;
  }

  // Create call for a particular interpreter
  // POST /interpreter/:id/calls
  @UseGuards(JwtAuthGuard)
  @Post(':id/calls')
  createCall(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() addCallDto: CallDto,
  ) {
    return this.service.addCall(id, addCallDto);
  }

  //Get badges for a particular interpreter
  // GET /interpreters/:id/badges
  @Get(':id/badges')
  async getBadges(@Param('id', ParseObjectIdPipe) id: string) {
    const interpreter = await this.service.findOne(id);
    return interpreter.badges;
  }

  // Add a badge to the badge field of an interpreter document
  // POST /interpreters/:id/badges
  @UseGuards(JwtAuthGuard)
  @Post(':id/badges')
  createBadge(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() addBadgeDto: BadgeDto,
  ) {
    return this.service.addBadge(id, addBadgeDto);
  }
}
