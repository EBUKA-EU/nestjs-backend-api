// Auth module that encapsulates all authentication-related components
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

import { User, UserSchema } from "./user.schema";
import { ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./jwt.strategy";

/**
 * AuthModule provides authentication functionality
 * Includes user registration, login, and JWT token management
 * Exports JwtModule for use in other modules that require authentication
 */
@Module({
    imports: [
        // Initialize Passport module for authentication strategies
        PassportModule,
        
        // Register the User schema with Mongoose for this module
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        
        // Configure JWT module with async configuration from environment variables
        JwtModule.registerAsync({
            inject: [ConfigService],  // Inject ConfigService to access JWT_SECRET
            useFactory: (config: ConfigService) => ({
                // Use JWT_SECRET from environment variables
                secret: config.get<string>("JWT_SECRET"),
                // Set token expiration time to 1 hour
                signOptions: { expiresIn: "1h" },
            }), 
        }),
    ],
    // Providers: AuthService handles business logic, JwtStrategy validates JWT tokens
    providers: [AuthService, JwtStrategy],
    // Controllers: AuthController handles /register and /login endpoints
    controllers: [AuthController],
    // Export JwtModule so other modules can use it for JWT validation
    exports: [JwtModule],
})

export class AuthModule {}