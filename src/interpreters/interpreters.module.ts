// Interpreters module that encapsulates interpreter-related CRUD operations
import { Module } from '@nestjs/common';
import { InterpretersController } from './interpreters.controller';
import { InterpretersService } from './interpreters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Interpreter, InterpreterSchema } from './interpreter.schema';

/**
 * InterpretersModule provides functionality for managing interpreter profiles
 * Handles CRUD operations for interpreters and their associated data
 * (calls, badges, performance metrics, languages, addresses)
 */
@Module({
  imports: [
    // Register the Interpreter schema with Mongoose for this module
    MongooseModule.forFeature([
      {name: Interpreter.name, schema: InterpreterSchema},
    ])
  ],
  // Controllers: Handle HTTP requests for interpreter endpoints
  controllers: [InterpretersController],
  // Providers: Services that contain the business logic
  providers: [InterpretersService]
})
export class InterpretersModule {}
