import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({_id: false})
export class Language {
  @Prop() native: string;
  @Prop() target: string;
}
export const LanguageSchema = SchemaFactory.createForClass(Language);

@Schema({_id: false})
export class Address {
  @Prop() country: string;
  @Prop() city: string;
  @Prop() province: string;
  @Prop() postal_code: string;
}
export const AddressSchema = SchemaFactory.createForClass(Address);

@Schema({_id: false})
export class Badge {
  @Prop() badge_name: string;
  @Prop() date_attained: string;
}

export const BadgeSchema = SchemaFactory.createForClass(Badge);

@Schema({_id: false})
export class Performance {
  @Prop() professionalism: number;
  @Prop() accuracy: number;
}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);

@Schema({_id: false})
export class Call {
  @Prop({required: true}) call_id: string;
  @Prop({default: Date.now}) call_date: Date;
  @Prop({required: true}) client_id: string;
  @Prop({required: true}) start_time: string;
  @Prop({required: true}) mins: number;
  @Prop({required: true}) rate_per_min: number;
  @Prop({required: true}) status: string;
  @Prop({required: true}) billable: boolean;
  @Prop({required: true}) dropped: boolean;
  @Prop() interpreter_comments: string;
  @Prop() client_feedback: string;
  @Prop() call_rating_by_client: number;
  @Prop({required: true}) pay: number;
  @Prop({required: true}) service_type: string;
}

export const CallSchema = SchemaFactory.createForClass(Call);

@Schema()
export class Interpreter extends Document {
  @Prop() interpreter_id: string;
  @Prop() name: string;
  @Prop() email: string;
  @Prop() is_active: boolean;

  @Prop({ type: [LanguageSchema] })
  languages: Language[];
 
  @Prop({default: Date.now}) date_joined: Date;

  @Prop({ type: AddressSchema })
  address: Address;

  @Prop() type: string;

  @Prop({ type: [BadgeSchema] })
  badges: Badge[];

  @Prop({ type: PerformanceSchema })
  performance: Performance;

  @Prop({ type: [CallSchema] })
  calls: Call[];
}

export const InterpreterSchema = SchemaFactory.createForClass(Interpreter);
