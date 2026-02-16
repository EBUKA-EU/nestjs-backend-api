// MongoDB schema definition for User documents in the authentication module
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * User schema defines the structure of user documents in MongoDB
 * Contains email and hashed password fields
 * Automatically includes timestamps (createdAt, updatedAt)
 */
@Schema({timestamps: true})
export class User extends Document {
    /** 
     * User email address
     * Must be unique, lowercase, and have whitespace trimmed
     */
    @Prop({required: true, unique: true, lowercase: true, trim: true})
    email: string;

    /**
     * User password (hashed using bcrypt)
     * Never stored in plain text for security
     */
    @Prop({required: true})
    password: string;
}

// Generate the Mongoose schema from the User class
export const UserSchema = SchemaFactory.createForClass(User);