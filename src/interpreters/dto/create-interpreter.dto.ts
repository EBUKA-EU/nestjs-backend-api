// Data Transfer Objects for creating interpreters and related entities
import {
  IsString,
  IsArray,
  IsBoolean,
  IsDateString,
  ValidateNested,
  IsNumber,
  IsOptional,
  isString,
  IsEmail,
} from 'class-validator';
import { Type } from 'class-transformer';

/**
 * LanguageDto represents a language pair the interpreter works with
 */
class LanguageDto {
  /**
   * The interpreter's native language
   */
  @IsString()
  native: string;

  /**
   * The target language the interpreter translates/interprets into
   */
  @IsString()
  target: string;
}

/**
 * AddressDto represents the physical address of an interpreter
 */
class AddressDto {
  /**
   * Country where the interpreter is located
   */
  @IsString()
  country: string;

  /**
   * City where the interpreter is located
   */
  @IsString()
  city: string;

  /**
   * Province/state where the interpreter is located
   */
  @IsString()
  province: string;

  /**
   * Postal code where the interpreter is located
   */
  @IsString()
  postal_code: string;
}

/**
 * BadgeDto represents a certification or achievement earned by an interpreter
 */
export class BadgeDto {
  /**
   * Name of the badge/certification
   */
  @IsString()
  badge_name: string;

  /**
   * Optional date when the badge was attained (ISO 8601 format)
   * If not provided, will be set to current date when added
   */
  @IsOptional()
  @IsDateString()
  date_attained: string;
}

/**
 * PerformanceDto tracks quality metrics for an interpreter
 */
class PerformanceDto {
  /**
   * Professionalism rating (typically 0-5 scale)
   */
  @IsNumber()
  professionalism: number;

  /**
   * Accuracy rating for interpretations (typically 0-5 scale)
   */
  @IsNumber()
  accuracy: number;
}

/**
 * CallDto represents a single interpretation session/call
 */
export class CallDto {
  /**
   * Optional unique identifier for the call
   * If not provided, will be auto-generated
   */
  @IsOptional()
  @IsString()
  call_id?: string; 

  /**
   * Optional date when the call occurred (ISO 8601 format)
   * If not provided, will default to current date
   */
  @IsOptional()
  @IsDateString()
  call_date?: string; 

  /**
   * Unique identifier of the client who requested the interpretation
   */
  @IsString()
  client_id: string;

  /**
   * Time when the call started (e.g., "09:30 AM")
   */
  @IsString()
  start_time: string;

  /**
   * Duration of the call in minutes
   */
  @IsNumber()
  mins: number;

  /**
   * Rate charged per minute of interpretation
   */
  @IsNumber()
  rate_per_min: number;

  /**
   * Total payment amount for this call
   */
  @IsNumber()
  pay: number; 

  /**
   * Status of the call (e.g., "completed", "cancelled", "no-show")
   */
  @IsString()
  status: string;

  /**
   * Whether the call is billable (yes/no)
   */
  @IsString()
  billable: string;

  /**
   * Whether the call was dropped/disconnected (yes/no)
   */
  @IsString()
  dropped: string;

  /**
   * Optional comments from the interpreter about the call
   */
  @IsOptional()
  @IsString()
  interpreter_comments?: string;

  /**
   * Optional feedback provided by the client
   */
  @IsOptional()
  @IsString()
  client_feedback?: string;

  /**
   * Optional rating given by the client (typically 1-5 scale)
   */
  @IsOptional()
  @IsNumber()
  call_rating_by_client?: number;

  /**
   * Type of interpretation service (e.g., "video call", "phone call", "in-person")
   */
  @IsString()
  service_type: string;
}


/**
 * CreateInterpreterDto validates the complete interpreter creation request
 * Contains all fields required to create a new interpreter document
 * Uses nested validation for related objects (Address, Languages, etc.)
 */
export class CreateInterpreterDto {
  /**
   * Optional unique interpreter ID
   * If provided, will be ignored (auto-generated during creation)
   */
  @IsOptional()
  @IsString()
  interpreter_id?: string;

  /**
   * Interpreter's first name
   */
  @IsString()
  first_name: string;

  /**
   * Interpreter's last name
   */
  @IsString()
  last_name: string;

  /**
   * Interpreter's email address (must be unique across all interpreters)
   */
  @IsString()
  @IsEmail()
  email: string;
  
  /**
   * Whether the interpreter is currently active/available for work
   */
  @IsBoolean()
  is_active: boolean;

  /**
   * Optional join date (ISO 8601 format)
   * If provided, will be ignored (auto-generated during creation)
   */
  @IsOptional()
  @IsDateString()
  date_joined: string;

  /**
   * Physical address of the interpreter
   * Nested object with full validation
   */
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  /**
   * Type of interpreter (e.g., "certified", "freelance", "medical", "legal")
   */
  @IsString()
  type: string;

  /**
   * Array of language pairs the interpreter works with
   * Each element validated as LanguageDto
   */
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LanguageDto)
  languages: LanguageDto[];

  /**
   * Optional array of badges/certifications already earned
   * Each element validated as BadgeDto
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BadgeDto)
  badges: BadgeDto[];

  /**
   * Performance metrics for the interpreter
   * Nested object with professionalism and accuracy ratings
   */
  @ValidateNested()
  @Type(() => PerformanceDto)
  performance: PerformanceDto;

  /**
   * Optional array of previous calls/sessions
   * Each element validated as CallDto
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CallDto)
  calls: CallDto[]; 
}
