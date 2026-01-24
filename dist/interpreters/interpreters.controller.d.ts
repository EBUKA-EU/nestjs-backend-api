import { InterpretersService } from './interpreters.service';
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
}
