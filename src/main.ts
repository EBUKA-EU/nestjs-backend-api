// Main entry point for the NestJS application
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * Bootstrap function that initializes and starts the NestJS application
 * Configures global validation pipes and starts the server on the specified port
 */
async function bootstrap() {
  // Create the NestJS application instance with the root AppModule
  const app = await NestFactory.create(AppModule);
  
  // Configure global validation pipes for all incoming requests
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // Strip away any properties not in the DTO
      forbidNonWhitelisted: true,   // Throw error if non-whitelisted properties are provided
      transform: true,               // Automatically transform plain objects to DTO instances
      transformOptions: {
        enableImplicitConversion: false  // Do not automatically convert types (strict mode)
      }
    })
  );

  // Start the application server on the port from environment variable or default to 3000
  await app.listen(process.env.PORT ?? 3000);
}

// Call the bootstrap function to start the application
bootstrap();
