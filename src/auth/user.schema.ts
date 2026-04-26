// MongoDB schema definition for User documents in the authentication module
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from './roles.enum';

/**
 * User schema defines the structure of user documents in MongoDB
 * Contains email and hashed password fields
 * Automatically includes timestamps (createdAt, updatedAt)
 */
@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  firstName!: string;

  @Prop({ required: true })
  lastName!: string;

  /**
   * User email address
   * Must be unique, lowercase, and have whitespace trimmed
   */
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email!: string;

  /**
   * User password (hashed using bcrypt)
   * Never stored in plain text for security
   */
  @Prop({ required: true })
  password!: string;

  /**
   * User role for authorization (defaults to 'user')
   * Admins can be assigned the 'admin' role directly in the database
   */
  @Prop({ type: String, enum: Role, default: Role.User })
  role!: Role;
}

// Generate the Mongoose schema from the User class
export const UserSchema = SchemaFactory.createForClass(User);
