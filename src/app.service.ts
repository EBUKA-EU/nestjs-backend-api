// Root service that provides business logic for the root controller
import { Injectable } from '@nestjs/common';

/**
 * AppService provides the business logic for the root controller
 * Contains the logic for the simple greeting endpoint
 */
@Injectable()
export class AppService {
  /**
   * Returns a simple greeting message
   * @returns {string} The greeting string "Hello World!"
   */
  getHello(): string {
    return 'Hello World!';
  }
}
