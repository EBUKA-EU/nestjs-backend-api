import { InterpretersService } from './interpreters.service';
import { BadgeDto, CallDto, CreateInterpreterDto } from './dto/create-interpreter.dto';
import { UpdateInterpreterDto } from './dto/update-interpreter.dto';
export declare class InterpretersController {
    private readonly service;
    constructor(service: InterpretersService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./interpreter.schema").Interpreter, {}, import("mongoose").DefaultSchemaOptions> & import("./interpreter.schema").Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./interpreter.schema").Interpreter, {}, import("mongoose").DefaultSchemaOptions> & import("./interpreter.schema").Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(createInterpreterDto: CreateInterpreterDto): Promise<import("mongoose").Document<unknown, {}, import("./interpreter.schema").Interpreter, {}, import("mongoose").DefaultSchemaOptions> & import("./interpreter.schema").Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateOne(id: string, updateInterpreter: UpdateInterpreterDto): Promise<(import("mongoose").Document<unknown, {}, import("./interpreter.schema").Interpreter, {}, import("mongoose").DefaultSchemaOptions> & import("./interpreter.schema").Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./interpreter.schema").Interpreter, {}, import("mongoose").DefaultSchemaOptions> & import("./interpreter.schema").Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    getCalls(id: string): Promise<import("./interpreter.schema").Call[]>;
    createCall(id: string, addCallDto: CallDto): Promise<import("mongoose").Document<unknown, {}, import("./interpreter.schema").Interpreter, {}, import("mongoose").DefaultSchemaOptions> & import("./interpreter.schema").Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    getBadges(id: string): Promise<import("./interpreter.schema").Badge[]>;
    createBadge(id: string, addBadgeDto: BadgeDto): Promise<(import("mongoose").Document<unknown, {}, import("./interpreter.schema").Interpreter, {}, import("mongoose").DefaultSchemaOptions> & import("./interpreter.schema").Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
