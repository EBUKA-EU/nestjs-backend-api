// Data Transfer Object for user registration request validation
import {IsEmail, IsString, MinLength} from "class-validator";

/**
 * RegisterDto validates the registration request body
 * Contains email and password fields with validation rules
 */
export class RegisterDto {
    @IsString()
    @MinLength(2, {message: "First name must be at least 2 characters long"})
    firstName: string;


    @IsString()
    @MinLength(2, {message: "Last name must be at least 2 characters long"})
    lastName: string;

    /**
     * User email address
     * Must be a valid email format
     */
    @IsEmail({}, {message: "Invalid email address"})
    email: string;

    /**
     * User password
     * Must be at least 8 characters long
     * Additional strength validation is performed in AuthService
     */
    @IsString()
    @MinLength(8, {message: "Password must be at least 8 characters long"})
    password: string;
}