// Service that handles business logic for interpreter CRUD operations
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Interpreter } from './interpreter.schema';
import { randomUUID } from 'crypto';
import {
  BadgeDto,
  CallDto,
  CreateInterpreterDto,
} from './dto/create-interpreter.dto';
import { UpdateInterpreterDto } from './dto/update-interpreter.dto';

/**
 * InterpretersService provides all business logic for interpreter operations
 * Handles CRUD operations on interpreter documents
 * Manages embedded documents (calls, badges, and other nested data)
 */
@Injectable()
export class InterpretersService {
  // Constructor injecting the Mongoose model for Interpreter documents
  constructor(
    @InjectModel(Interpreter.name)
    private interpreterModel: Model<Interpreter>,
  ) {}

  // ==================== INTERPRETER DOCUMENT LOGIC ====================

  /**
   * Retrieve all interpreter documents from the database
   * @returns {Promise<Array>} Array of all interpreter documents
   */
  async findAll() {
    return this.interpreterModel.find().exec();
  }

  /**
   * Retrieve a single interpreter document by MongoDB ObjectId
   * Validates the ID format and sorts calls by newest first
   * 
   * @param {string} id - MongoDB ObjectId of the interpreter
   * @returns {Promise<Object>} Single interpreter document with sorted calls
   * @throws {BadRequestException} If ID format is invalid
   * @throws {NotFoundException} If interpreter document not found
   */
  async findOne(id: string) {
    // Validate that the provided ID is a valid MongoDB ObjectId format
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid interpreter id');
    }

    // Query the database for an interpreter with matching ID
    const interpreter = await this.interpreterModel.findOne({ _id: id });

    // Throw error if no interpreter found with that ID
    if (!interpreter) {
      throw new NotFoundException('Interpreter object not found');
    }

    // Sort calls array by call_date in descending order (newest first)
    interpreter.calls.sort((a, b) => {
      return new Date(b.call_date).getTime() - new Date(a.call_date).getTime();
    });

    return interpreter;
  }

  /**
   * Create a new interpreter document
   * Generates unique interpreter_id, sets date_joined to current date
   * Initializes empty calls and badges arrays
   * 
   * @param {CreateInterpreterDto} createInterpreter - Validated interpreter data
   * @returns {Promise<Object>} Newly created interpreter document
   */
  async createInterpreter(createInterpreter: CreateInterpreterDto) {
    // Prepare new interpreter object with auto-generated fields
    const newInterpreter = {
      ...createInterpreter,
      interpreter_id: randomUUID(),    // Generate unique ID using UUID
      date_joined: new Date(),          // Set to current date/time
      calls: [],                        // Initialize empty calls array
      badges: [],                       // Initialize empty badges array
    };

    // Create and return the new interpreter document in MongoDB
    return this.interpreterModel.create(newInterpreter);
  }

  /**
   * Update an existing interpreter document
   * Prevents modification of immutable fields (interpreter_id, date_joined)
   * 
   * @param {string} id - MongoDB ObjectId of the interpreter to update
   * @param {UpdateInterpreterDto} updateInterpreter - Partial data to update
   * @returns {Promise<Object>} Updated interpreter document
   * @throws {NotFoundException} If interpreter document not found
   */
  async updateInterpreter(id: string, updateInterpreter: UpdateInterpreterDto) {
    // Remove fields that should not be modified after creation
    delete updateInterpreter.interpreter_id;
    delete updateInterpreter.date_joined;

    // Update the document in MongoDB with new values and return updated document
    return this.interpreterModel.findByIdAndUpdate(
      id,
      { $set: updateInterpreter },     // Only update specified fields
      { new: true, runValidators: true }, // Return updated doc and run schema validators
    );
  }

  /**
   * Delete an interpreter document from the database
   * 
   * @param {string} id - MongoDB ObjectId of the interpreter to delete
   * @returns {Promise<Object>} The deleted interpreter document
   * @throws {NotFoundException} If interpreter document not found
   */
  async deleteInterpreter(id: string) {
    // Delete the document by ID and get the deleted document back
    const deleted = await this.interpreterModel.findByIdAndDelete(id);

    // Throw error if document to delete was not found
    if (!deleted) {
      throw new NotFoundException(
        `Interpreter document with object id: ${id} not found`,
      );
    }

    return deleted;
  }

  // ==================== EMBEDDED DOCUMENT LOGIC ====================

  /**
   * Add a new call record to an interpreter's calls array
   * Generates unique call_id and sets call_date
   * 
   * @param {string} id - MongoDB ObjectId of the interpreter
   * @param {CallDto} callDto - Validated call data
   * @returns {Promise<Object>} Updated interpreter document with new call added
   * @throws {NotFoundException} If interpreter document not found
   */
  async addCall(id: string, callDto: CallDto) {
    // Prepare the call object with auto-generated fields
    const call = {
      ...callDto,
      call_id: randomUUID(),  // Generate unique ID for this call
      // Use provided call_date or default to current date/time if not provided
      call_date: callDto.call_date ? new Date(callDto.call_date) : new Date(),
    };

    // Add the call to the interpreter's calls array using MongoDB $push operator
    const updatedCallField = await this.interpreterModel.findByIdAndUpdate(
      id,
      { $push: { calls: call } },      // Push new call onto calls array
      { new: true, runValidators: true }, // Return updated doc and validate
    );

    // Throw error if interpreter not found
    if (!updatedCallField) {
      throw new NotFoundException(
        `Interpreter document with id ${id} not found`,
      );
    }

    return updatedCallField;
  }

  /**
   * Add a new badge to an interpreter's badges array
   * Automatically sets the date_attained to current date
   * 
   * @param {string} id - MongoDB ObjectId of the interpreter
   * @param {BadgeDto} badgeDto - Validated badge data
   * @returns {Promise<Object>} Updated interpreter document with new badge added
   * @throws {NotFoundException} If interpreter document not found
   */
  async addBadge(id: string, badgeDto: BadgeDto) {
    // Prepare the badge object with current date
    const badge = {
      ...badgeDto,
      date_attained: new Date(),  // Set to current date/time when badge is earned
    };

    // Add the badge to the interpreter's badges array using MongoDB $push operator
    const updatedBadgeField = this.interpreterModel.findByIdAndUpdate(
      id,
      { $push: { badges: badge } },    // Push new badge onto badges array
      { new: true, runValidators: true }, // Return updated doc and validate
    );

    // Throw error if interpreter not found
    if (!updatedBadgeField) {
      throw new NotFoundException(
        `Interpreter document with id ${id} not found`,
      );
    }

    return updatedBadgeField;
  }
}
