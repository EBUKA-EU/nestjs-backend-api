"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpretersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const interpreter_schema_1 = require("./interpreter.schema");
const crypto_1 = require("crypto");
let InterpretersService = class InterpretersService {
    interpreterModel;
    constructor(interpreterModel) {
        this.interpreterModel = interpreterModel;
    }
    async findAll() {
        return this.interpreterModel.find().exec();
    }
    async findOne(id) {
        if (!(0, mongoose_2.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid interpreter id');
        }
        const interpreter = await this.interpreterModel.findOne({ _id: id });
        if (!interpreter) {
            throw new common_1.NotFoundException('Interpreter object not found');
        }
        return interpreter;
    }
    async createInterpreter(createInterpreter) {
        const newInterpreter = {
            ...createInterpreter,
            interpreter_id: (0, crypto_1.randomUUID)(),
            date_joined: new Date(),
            calls: [],
            badges: [],
        };
        return this.interpreterModel.create(newInterpreter);
    }
    async updateInterpreter(id, updateInterpreter) {
        delete updateInterpreter.interpreter_id;
        delete updateInterpreter.date_joined;
        return this.interpreterModel.findByIdAndUpdate(id, { $set: updateInterpreter }, { new: true, runValidators: true });
    }
    async deleteInterpreter(id) {
        const deleted = await this.interpreterModel.findByIdAndDelete(id);
        if (!deleted) {
            throw new common_1.NotFoundException(`Interpreter document with object id: ${id} not found`);
        }
        return deleted;
    }
    async addCall(id, callDto) {
        const call = {
            ...callDto,
            call_date: new Date(),
            call_id: (0, crypto_1.randomUUID)(),
        };
        const updatedCallField = this.interpreterModel.findByIdAndUpdate(id, { $push: { calls: call } }, { new: true, runValidators: true });
        if (!updatedCallField) {
            throw new common_1.NotFoundException(`Interpreter document with id ${id} not found`);
        }
        return updatedCallField;
    }
    async addBadge(id, badgeDto) {
        const badge = {
            ...badgeDto,
            date_attained: new Date(),
        };
        const updatedBadgeField = this.interpreterModel.findByIdAndUpdate(id, { $push: { badges: badge } }, { new: true, runValidators: true });
        if (!updatedBadgeField) {
            throw new common_1.NotFoundException(`Interpreter document with id ${id} not found`);
        }
        return updatedBadgeField;
    }
};
exports.InterpretersService = InterpretersService;
exports.InterpretersService = InterpretersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(interpreter_schema_1.Interpreter.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InterpretersService);
//# sourceMappingURL=interpreters.service.js.map