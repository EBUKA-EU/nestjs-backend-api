// Core application module that sets up the root of the NestJS application
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterpretersModule } from './interpreters/interpreters.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

/**
 * Root module for the NestJS application
 * Manages global configuration, database connection, and imports of all feature modules
 */
@Module({
  imports: [
    // Load environment variables from .env file into ConfigService
    ConfigModule.forRoot({
      isGlobal: true,  // Make ConfigModule available globally across the entire application
    }),

    // Connect to MongoDB using Mongoose with async configuration
    MongooseModule.forRootAsync({
      inject: [ConfigService],  // Inject ConfigService to access environment variables
      useFactory: (config: ConfigService) => {
        // Retrieve the MongoDB connection URL from environment variables
        const uri = config.get<string>('DATABASE_URL');
        if (!uri) {
          // Throw error if DATABASE_URL is not defined
          throw new Error("DATABASE_URL is not defined in environment variables");
        }

        // Return the Mongoose connection configuration object
        return { uri };
      },
    }),

    // Import authentication module (handles user registration and login)
    AuthModule,
    // Import interpreters module (handles interpreter CRUD operations)
    InterpretersModule,
  ],
  // Register controllers that handle the root path requests
  controllers: [AppController],
  // Register providers (services) at the root level
  providers: [AppService],
})

export class AppModule {}