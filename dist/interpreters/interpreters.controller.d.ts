import { InterpretersService } from './interpreters.service';
import { Interpreter } from './interpreter.schema';
export declare class InterpretersController {
    private readonly service;
    constructor(service: InterpretersService);
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
    create(createInterpreterDto: Interpreter): Promise<import("mongoose").Document<unknown, {}, Interpreter, {}, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
