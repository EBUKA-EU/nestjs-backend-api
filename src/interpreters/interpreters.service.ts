import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Interpreter } from './interpreter.schema';

@Injectable()
export class InterpretersService {
  constructor(
    @InjectModel(Interpreter.name)
    private interpreterModel: Model<Interpreter>,
  ) {}

  async findAll() {
    return this.interpreterModel.find().exec();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid interpreter id');
    }

    const interpreter = await this.interpreterModel.findOne({ _id: id });

    if (!interpreter) {
      throw new NotFoundException('Interpreter not found');
    }

    return interpreter;
  }

  async createInterpreter(createInterpreterDto: Interpreter) {
    const newInterpreter = new this.interpreterModel(createInterpreterDto);

    return newInterpreter.save();
  }
}
