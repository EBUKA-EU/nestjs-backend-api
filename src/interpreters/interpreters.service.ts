import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Interpreter } from './interpreter.schema';

@Injectable()
export class InterpretersService {
    constructor(
        @InjectModel(Interpreter.name)
        private interpreterModel: Model<Interpreter>,
    ) {}

    async findAll(){
        return this.interpreterModel.find().exec();
    }
}
