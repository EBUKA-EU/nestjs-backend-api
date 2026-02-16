// Controller that handles HTTP endpoints for interpreter CRUD operations
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

/**
 * InterpretersController handles all HTTP requests related to interpreters
 * Provides endpoints for CRUD operations on interpreter profiles
 * and managing embedded documents (calls, badges)
 * All routes are prefixed with /interpreters
 */
@Controller('interpreters')
export class InterpretersController {
  // Inject the InterpretersService to access business logic
  constructor(private readonly service: InterpretersService) {
    console.log('Interpreter controller loaded');
  }

  // ==================== INTERPRETER COLLECTION ENDPOINTS ====================

  /**
   * GET all interpreters
   * Route: GET /interpreters
   * Public endpoint - no authentication required
   * @returns {Array} Array of all interpreter documents
   */
  @Get()
  findAll() {
    return this.service.findAll();
  }

  /**
   * GET a single interpreter by ID
   * Route: GET /interpreters/:id
   * Public endpoint - no authentication required
   * @param {string} id - MongoDB ObjectId of the interpreter (validated by ParseObjectIdPipe)
   * @returns {Object} Single interpreter document with calls sorted by newest first
   */
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.service.findOne(id);
  }

  /**
   * CREATE a new interpreter document
   * Route: POST /interpreters
   * Protected endpoint - requires valid JWT token in Authorization header
   * @param {CreateInterpreterDto} createInterpreterDto - Validated interpreter data
   * @returns {Object} Newly created interpreter document
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createInterpreterDto: CreateInterpreterDto) {
    return this.service.createInterpreter(createInterpreterDto);
  }

  /**
   * UPDATE an existing interpreter document
   * Route: PATCH /interpreters/:id
   * Protected endpoint - requires valid JWT token in Authorization header
   * @param {string} id - MongoDB ObjectId of the interpreter to update
   * @param {UpdateInterpreterDto} updateInterpreter - Validated partial interpreter data (all fields optional)
   * @returns {Object} Updated interpreter document
   */
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateOne(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateInterpreter: UpdateInterpreterDto,
  ) {
    return this.service.updateInterpreter(id, updateInterpreter);
  }

  /**
   * DELETE an interpreter document
   * Route: DELETE /interpreters/:id
   * Protected endpoint - requires valid JWT token in Authorization header
   * Returns NO content on success (204 status)
   * @param {string} id - MongoDB ObjectId of the interpreter to delete
   * @returns {void} No content returned on successful deletion
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.service.deleteInterpreter(id);
  }

  // ==================== EMBEDDED DOCUMENTS ENDPOINTS ====================

  /**
   * GET all calls for a specific interpreter
   * Route: GET /interpreters/:id/calls
   * Public endpoint - no authentication required
   * @param {string} id - MongoDB ObjectId of the interpreter
   * @returns {Array} Array of call documents sorted by newest first
   */
  @Get(':id/calls')
  async getCalls(@Param('id', ParseObjectIdPipe) id: string) {
    const interpreter = await this.service.findOne(id);
    return interpreter.calls;
  }

  /**
   * CREATE a new call record for an interpreter
   * Route: POST /interpreters/:id/calls
   * Protected endpoint - requires valid JWT token in Authorization header
   * Adds a call document to the calls array of the interpreter
   * @param {string} id - MongoDB ObjectId of the interpreter
   * @param {CallDto} addCallDto - Validated call data
   * @returns {Object} Updated interpreter document with new call added
   */
  @UseGuards(JwtAuthGuard)
  @Post(':id/calls')
  createCall(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() addCallDto: CallDto,
  ) {
    return this.service.addCall(id, addCallDto);
  }

  /**
   * GET all badges for a specific interpreter
   * Route: GET /interpreters/:id/badges
   * Public endpoint - no authentication required
   * @param {string} id - MongoDB ObjectId of the interpreter
   * @returns {Array} Array of badge documents
   */
  @Get(':id/badges')
  async getBadges(@Param('id', ParseObjectIdPipe) id: string) {
    const interpreter = await this.service.findOne(id);
    return interpreter.badges;
  }

  /**
   * CREATE a new badge for an interpreter
   * Route: POST /interpreters/:id/badges
   * Protected endpoint - requires valid JWT token in Authorization header
   * Adds a badge document to the badges array of the interpreter
   * @param {string} id - MongoDB ObjectId of the interpreter
   * @param {BadgeDto} addBadgeDto - Validated badge data
   * @returns {Object} Updated interpreter document with new badge added
   */
  @UseGuards(JwtAuthGuard)
  @Post(':id/badges')
  createBadge(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() addBadgeDto: BadgeDto,
  ) {
    return this.service.addBadge(id, addBadgeDto);
  }
}
