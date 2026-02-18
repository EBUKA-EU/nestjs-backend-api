// Service that handles authentication business logic (registration and login)
import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

import { User } from "./user.schema";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

/**
 * AuthService provides authentication business logic
 * Handles user registration, login, password validation, and JWT token generation
 */
@Injectable()
export class AuthService {
    // Constructor injecting MongoDB User model and JWT service
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    /**
     * Validates whether a password meets security requirements
     * Password must be at least 8 characters and contain:
     * - At least one lowercase letter
     * - At least one uppercase letter
     * - At least one digit
     * - At least one special character (@$!%*?&)
     * 
     * @param {string} password - The password to validate
     * @returns {boolean} True if password is strong, false otherwise
     */
    private isStrongPassword(password: string): boolean {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordRegex.test(password);
    }

    /**
     * Registers a new user account
     * Validates email uniqueness, password strength, hashes password, and generates JWT token
     * 
     * @param {RegisterDto} dto - Registration data containing first name, last name, email and password
     * @returns {Promise<Object>} Object containing success message and JWT token
     * @throws {BadRequestException} If email is already in use or password is weak
     */
    async register(dto: RegisterDto): Promise<object>{

        const firstName = dto.firstName;
        const lastName = dto.lastName;

        // Normalize email: convert to lowercase and trim whitespace
        const email = dto.email.toLowerCase().trim();
        
        // Check if user with this email already exists
        const existingUser = await this.userModel.findOne({email}).exec();
        if (existingUser) {
            throw new BadRequestException("User with this email already exists");
        }
        
        // Validate password meets security requirements
        if (!this.isStrongPassword(dto.password)) {
            throw new BadRequestException("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character");
        }
        
        // Hash the password using bcrypt with 10 salt rounds for security
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        
        // Create new user document in MongoDB
        const newUser = await this.userModel.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        // Generate JWT token containing user ID and email
        const token = await this.jwtService.signAsync({ 
            sub: newUser._id,
            email: newUser.email,
        });

        return { message: "User registered successfully", token };
    }

    /**
     * Authenticates a user and generates a JWT token
     * Validates email exists and password is correct
     * 
     * @param {LoginDto} dto - Login data containing email and password
     * @returns {Promise<Object>} Object containing success message and JWT token
     * @throws {UnauthorizedException} If email not found or password is incorrect
     */
    async login(dto: LoginDto): Promise<object> {
        // Normalize email: convert to lowercase and trim whitespace
        const email = dto.email.toLowerCase().trim();
        
        // Find user by email
        const user = await this.userModel.findOne({email}).exec();
        if (!user) {
            throw new UnauthorizedException("Invalid email or password");
        }
        
        // Compare provided password with hashed password stored in database
        const isPasswordValid = await bcrypt.compare(dto.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid email or password");
        }
        
        // Generate JWT token containing user ID and email
        const token = await this.jwtService.signAsync({ 
            sub: user._id,
            email: user.email,
        });
        
        return { message: "Login successful", token };
    }
}