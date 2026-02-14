import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Interpreter } from './interpreter.schema';
import { randomUUID } from 'crypto';
import {
  BadgeDto,
  CallDto,
  CreateInterpreterDto,
} from './dto/create-interpreter.dto';
import { UpdateInterpreterDto } from './dto/update-interpreter.dto';

@Injectable()
export class InterpretersService {
  constructor(
    @InjectModel(Interpreter.name)
    private interpreterModel: Model<Interpreter>,
  ) {}

  //INTERPRETER DOCUMENT LOGIC
  // find all interpreter documents
  async findAll() {
    return this.interpreterModel.find().exec();
  }

  // find one interpreter document
  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid interpreter id');
    }

    const interpreter = await this.interpreterModel.findOne({ _id: id });

    if (!interpreter) {
      throw new NotFoundException('Interpreter object not found');
    }

    // Sort calls by newest first
    interpreter.calls.sort((a, b) => {
      return new Date(b.call_date).getTime() - new Date(a.call_date).getTime();
    });


    return interpreter;
  }

  // create an interpreter document
  async createInterpreter(createInterpreter: CreateInterpreterDto) {
    const newInterpreter = {
      ...createInterpreter,
      interpreter_id: randomUUID(),
      date_joined: new Date(),
      calls: [],
      badges: [],
    };

    return this.interpreterModel.create(newInterpreter);
  }

  // Update an interpreter document
  async updateInterpreter(id: string, updateInterpreter: UpdateInterpreterDto) {
    delete updateInterpreter.interpreter_id;
    delete updateInterpreter.date_joined;

    return this.interpreterModel.findByIdAndUpdate(
      id,
      { $set: updateInterpreter },
      { new: true, runValidators: true },
    );
  }

  // delete an interpreter document
  async deleteInterpreter(id: string) {
    const deleted = await this.interpreterModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException(
        `Interpreter document with object id: ${id} not found`,
      );
    }

    return deleted;
  }

  // EMBEDDED DOCUMENT LOGIC
  // Add a new call object to the calls field of an interpreter document
  async addCall(id: string, callDto: CallDto) {
    const call = {
      ...callDto,
      call_id: randomUUID(),
      call_date: callDto.call_date ? new Date(callDto.call_date) : new Date(),
    };

    const updatedCallField = await this.interpreterModel.findByIdAndUpdate(
      id,
      { $push: { calls: call } },
      { new: true, runValidators: true },
    );

    if (!updatedCallField) {
      throw new NotFoundException(
        `Interpreter document with id ${id} not found`,
      );
    }

    return updatedCallField;
  }

  // Add a new badge object to the badge field of an interpreter document
  async addBadge(id: string, badgeDto: BadgeDto) {
    const badge = {
      ...badgeDto,
      date_attained: new Date(),
    };

    const updatedBadgeField = this.interpreterModel.findByIdAndUpdate(
      id,
      { $push: { badges: badge } },
      { new: true, runValidators: true },
    );

    if (!updatedBadgeField) {
      throw new NotFoundException(
        `Interpreter document with id ${id} not found`,
      );
    }

    return updatedBadgeField;
  }
}
