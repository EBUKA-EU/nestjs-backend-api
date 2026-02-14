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

class LanguageDto {
  @IsString()
  native: string;

  @IsString()
  target: string;
}

class AddressDto {
  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  province: string;

  @IsString()
  postal_code: string;
}

export class BadgeDto {
  @IsString()
  badge_name: string;

  @IsOptional()
  @IsDateString()
  date_attained: string;
}

class PerformanceDto {
  @IsNumber()
  professionalism: number;

  @IsNumber()
  accuracy: number;
}

export class CallDto {
  @IsOptional()
  @IsString()
  call_id?: string; 

  @IsOptional()
  @IsDateString()
  call_date?: string; 

  @IsString()
  client_id: string;

  @IsString()
  start_time: string;

  @IsNumber()
  mins: number;

  @IsNumber()
  rate_per_min: number;

  @IsNumber()
  pay: number; 

  @IsString()
  status: string;

  @IsString()
  billable: string;

  @IsString()
  dropped: string;

  @IsOptional()
  @IsString()
  interpreter_comments?: string;

  @IsOptional()
  @IsString()
  client_feedback?: string;

  @IsOptional()
  @IsNumber()
  call_rating_by_client?: number;

  @IsString()
  service_type: string;
}


export class CreateInterpreterDto {
  @IsOptional()
  @IsString()
  interpreter_id?: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  @IsEmail()
  email: string;
  
  @IsBoolean()
  is_active: boolean;

  @IsOptional()
  @IsDateString()
  date_joined: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsString()
  type: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LanguageDto)
  languages: LanguageDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BadgeDto)
  badges: BadgeDto[];

  @ValidateNested()
  @Type(() => PerformanceDto)
  performance: PerformanceDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CallDto)
  calls: CallDto[]; 
}
