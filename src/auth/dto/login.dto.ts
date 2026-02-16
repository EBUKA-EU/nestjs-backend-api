// Data Transfer Object for user login request validation
import { IsEmail, IsString } from "class-validator";

/**
 * LoginDto validates the login request body
 * Contains email and password fields for user authentication
 */
export class LoginDto {
    /**
     * User email address
     * Must be a valid email format
     */
    @IsEmail({}, {message: "Invalid email address"})
    email: string;

    /**
     * User password
     * Plain text password (will be compared against hashed password in database)
     */
    @IsString()
    password: string;
}