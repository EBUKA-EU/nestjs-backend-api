import { Model } from 'mongoose';
import { Interpreter } from './interpreter.schema';
import { BadgeDto, CallDto, CreateInterpreterDto } from './dto/create-interpreter.dto';
import { UpdateInterpreterDto } from './dto/update-interpreter.dto';
export declare class InterpretersService {
    private interpreterModel;
    constructor(interpreterModel: Model<Interpreter>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Interpreter, {}, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Interpreter, {}, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    createInterpreter(createInterpreter: CreateInterpreterDto): Promise<import("mongoose").Document<unknown, {}, Interpreter, {}, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateInterpreter(id: string, updateInterpreter: UpdateInterpreterDto): Promise<(import("mongoose").Document<unknown, {}, Interpreter, {}, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteInterpreter(id: string): Promise<import("mongoose").Document<unknown, {}, Interpreter, {}, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    addCall(id: string, callDto: CallDto): Promise<(import("mongoose").Document<unknown, {}, Interpreter, {}, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    addBadge(id: string, badgeDto: BadgeDto): Promise<(import("mongoose").Document<unknown, {}, Interpreter, {}, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
