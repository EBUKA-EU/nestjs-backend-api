import { Model } from 'mongoose';
import { Interpreter } from './interpreter.schema';
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
}
