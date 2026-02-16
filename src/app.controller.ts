// Root controller that handles requests to the base path of the API
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * AppController is the root controller for the application
 * Handles HTTP requests at the root path (/)
 */
@Controller()
export class AppController {
  // Inject the AppService to access business logic
  constructor(private readonly appService: AppService) {}

  /**
   * GET endpoint at the root path (/)
   * Returns a simple greeting message
   * @returns {string} The greeting message "Hello World!"
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
