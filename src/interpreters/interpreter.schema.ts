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
  @Prop() call_id: string;
  @Prop() call_date: string;
  @Prop() client_id: string;
  @Prop() start_time: string;
  @Prop() mins: number;
  @Prop() rate_per_min: number;
  @Prop() status: string;
  @Prop() billable: boolean;
  @Prop() dropped: string;
  @Prop() interpreter_comments: string;
  @Prop() client_feedback: string;
  @Prop() call_rating: number;
  @Prop() service_type: string;
}

export const CallSchema = SchemaFactory.createForClass(Call);

@Schema({_id: false})
export class Interpreter extends Document {
  @Prop() interpreter_id: string;
  @Prop() name: string;
  @Prop() is_active: boolean;

  @Prop({ type: [LanguageSchema] })
  languages: Language[];

  @Prop() date_joined: string;

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
