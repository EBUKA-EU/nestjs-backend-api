// Data Transfer Object for user registration request validation
import {IsEmail, IsString, Matches, MaxLength, MinLength} from "class-validator";

/**
 * RegisterDto validates the registration request body
 * Contains email and password fields with validation rules
 */
export class RegisterDto {
    @IsString()
    @MinLength(2, {message: "First name is too short"})
    @MaxLength(55, {message: "First name is too long"})
    @Matches(/^[a-zA-z ]+$/, {message: "First name cannot contain special characters and numbers"})
    firstName: string;


    @IsString()
    @MinLength(2, {message: "Last name is too short"})
    @MaxLength(55, {message: "Last name is too long"})
    @Matches(/^[a-zA-z ]+$/, {message: "Last name cannot contain special characters and numbers"})
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