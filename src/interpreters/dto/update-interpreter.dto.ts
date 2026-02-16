// Data Transfer Object for updating interpreters
import {PartialType} from '@nestjs/mapped-types';
import { CreateInterpreterDto } from './create-interpreter.dto';

/**
 * UpdateInterpreterDto validates the interpreter update request body
 * Extends CreateInterpreterDto as a PartialType, making all fields optional
 * This allows partial updates where only some fields need to be modified
 * 
 * NestJS's PartialType automatically converts all required fields to optional
 * while keeping the same validators
 */
export class UpdateInterpreterDto extends PartialType(CreateInterpreterDto) {}