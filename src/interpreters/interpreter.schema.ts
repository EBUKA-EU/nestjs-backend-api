// MongoDB schema definitions for Interpreter documents and nested embedded documents
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Language schema represents a language pair that an interpreter can provide
 * Embedded document (no separate _id field)
 */
@Schema({_id: false})
export class Language {
  /**
   * Native language of the interpreter (language they speak natively)
   */
  @Prop() native: string;
  
  /**
   * Target language the interpreter translates/interprets into
   */
  @Prop() target: string;
}
export const LanguageSchema = SchemaFactory.createForClass(Language);

/**
 * Address schema represents the physical location of an interpreter
 * Embedded document (no separate _id field)
 */
@Schema({_id: false})
export class Address {
  /**
   * Country where the interpreter is located
   */
  @Prop() country: string;
  
  /**
   * City where the interpreter is located
   */
  @Prop() city: string;
  
  /**
   * Province/state where the interpreter is located
   */
  @Prop() province: string;
  
  /**
   * Postal code of the interpreter's location
   */
  @Prop() postal_code: string;
}
export const AddressSchema = SchemaFactory.createForClass(Address);

/**
 * Badge schema represents a certification or achievement earned by an interpreter
 * Embedded document (no separate _id field)
 */
@Schema({_id: false})
export class Badge {
  /**
   * Name of the badge/certificate
   */
  @Prop() badge_name: string;
  
  /**
   * Date when the badge was earned/attained
   */
  @Prop() date_attained: Date;
}

export const BadgeSchema = SchemaFactory.createForClass(Badge);

/**
 * Performance schema tracks the quality metrics of an interpreter
 * Embedded document (no separate _id field)
 */
@Schema({_id: false})
export class Performance {
  /**
   * Professionalism rating (typically 0-5 scale)
   */
  @Prop() professionalism: number;
  
  /**
   * Accuracy rating - how accurate are their interpretations (typically 0-5 scale)
   */
  @Prop() accuracy: number;
}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);

/**
 * Call schema records information about a single interpretation call/session
 * Embedded document (no separate _id field)
 */
@Schema({_id: false})
export class Call {
  /**
   * Unique identifier for the call (UUID)
   */
  @Prop({required: true}) call_id: string;
  
  /**
   * Date when the call occurred (defaults to current date)
   */
  @Prop({default: Date.now}) call_date: Date;
  
  /**
   * Unique identifier of the client requesting the interpretation
   */
  @Prop({required: true}) client_id: string;
  
  /**
   * Time when the call started (e.g., "09:30 AM")
   */
  @Prop({required: true}) start_time: string;
  
  /**
   * Duration of the call in minutes
   */
  @Prop({required: true}) mins: number;
  
  /**
   * Rate charged per minute of interpretation
   */
  @Prop({required: true}) rate_per_min: number;
  
  /**
   * Status of the call (e.g., "completed", "cancelled", "no-show")
   */
  @Prop({required: true}) status: string;
  
  /**
   * Whether the call is billable (yes/no)
   */
  @Prop({required: true}) billable: string;
  
  /**
   * Whether the call was dropped/disconnected (yes/no)
   */
  @Prop({required: true}) dropped: string;
  
  /**
   * Optional comments from the interpreter about the call
   */
  @Prop() interpreter_comments: string;
  
  /**
   * Optional feedback from the client about the interpretation
   */
  @Prop() client_feedback: string;
  
  /**
   * Rating given by the client (typically 1-5 scale)
   */
  @Prop() call_rating_by_client: number;
  
  /**
   * Total payment amount for the call
   */
  @Prop({required: true}) pay: number;
  
  /**
   * Type of interpretation service (e.g., "video call", "phone call", "in-person")
   */
  @Prop({required: true}) service_type: string;
}

export const CallSchema = SchemaFactory.createForClass(Call);

/**
 * Interpreter schema is the main document for storing interpreter profiles
 * Extends Mongoose Document for database operations
 */
@Schema()
export class Interpreter extends Document {
  /**
   * Unique identifier for the interpreter (UUID)
   */
  @Prop() interpreter_id: string;
  
  /**
   * Interpreter's first name
   */
  @Prop({required: true}) first_name: string;
  
  /**
   * Interpreter's last name
   */
  @Prop({required: true}) last_name: string;
  
  /**
   * Interpreter's email address (must be unique)
   */
  @Prop({required: true, unique: true}) email: string;
  
  /**
   * Whether the interpreter is currently active (available for work)
   */
  @Prop() is_active: boolean;

  /**
   * Array of languages the interpreter can work with
   * Contains Language subdocuments with native and target language pairs
   */
  @Prop({ type: [LanguageSchema] })
  languages: Language[];
 
  /**
   * Date when the interpreter joined the platform (defaults to current date)
   */
  @Prop({default: Date.now}) date_joined: Date;

  /**
   * Physical address of the interpreter
   */
  @Prop({ type: AddressSchema })
  address: Address;

  /**
   * Type of interpreter (e.g., "certified", "freelance", "medical", "legal")
   */
  @Prop({required: true}) type: string;

  /**
   * Array of badges/certifications earned by the interpreter
   */
  @Prop({ type: [BadgeSchema] })
  badges: Badge[];

  /**
   * Performance metrics tracking accuracy and professionalism
   */
  @Prop({ type: PerformanceSchema })
  performance: Performance;

  /**
   * Array of all calls/sessions completed by the interpreter
   */
  @Prop({ type: [CallSchema] })
  calls: Call[];
}

export const InterpreterSchema = SchemaFactory.createForClass(Interpreter);

/**
 * Custom JSON transformation for Interpreter documents
 * Formats all dates to YYYY/MM/DD format when converting to JSON
 * Applied when sending documents in API responses
 */
InterpreterSchema.set('toJSON', {
  transform: (_: any, ret: any) => {
    /**
     * Helper function to format Date objects to YYYY/MM/DD string format
     * @param {Date} date - Date to format
     * @returns {string} Formatted date string
     */
    const format = (date: Date): string =>
      `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;

    // Format the date_joined field if it exists and is a Date
    if (ret.date_joined instanceof Date) {
      ret.date_joined = format(ret.date_joined);
    }

    // Format all call dates in the calls array
    if (Array.isArray(ret.calls)) {
      ret.calls = ret.calls.map((call: any) => ({
        ...call,
        call_date:
          call.call_date instanceof Date ? format(call.call_date) : call.call_date,
      }));
    }

    // Format all badge dates in the badges array
    if (Array.isArray(ret.badges)) {
      ret.badges = ret.badges.map((badge: any) => ({
        ...badge,
        date_attained:
          badge.date_attained instanceof Date ? format(badge.date_attained) : badge.date_attained,
      }));
    }

    return ret;
  },
});