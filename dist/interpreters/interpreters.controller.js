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
exports.InterpretersController = void 0;
const common_1 = require("@nestjs/common");
const interpreters_service_1 = require("./interpreters.service");
const mongoose_1 = require("@nestjs/mongoose");
const create_interpreter_dto_1 = require("./dto/create-interpreter.dto");
const update_interpreter_dto_1 = require("./dto/update-interpreter.dto");
let InterpretersController = class InterpretersController {
    service;
    constructor(service) {
        this.service = service;
        console.log('Interpreter controller loaded');
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(createInterpreterDto) {
        return this.service.createInterpreter(createInterpreterDto);
    }
    updateOne(id, updateInterpreter) {
        return this.service.updateInterpreter(id, updateInterpreter);
    }
    deleteOne(id) {
        return this.service.deleteInterpreter(id);
    }
    async getCalls(id) {
        const interpreter = await this.service.findOne(id);
        return interpreter.calls;
    }
    createCall(id, addCallDto) {
        return this.service.addCall(id, addCallDto);
    }
    async getBadges(id) {
        const interpreter = await this.service.findOne(id);
        return interpreter.badges;
    }
    createBadge(id, addBadgeDto) {
        return this.service.addBadge(id, addBadgeDto);
    }
};
exports.InterpretersController = InterpretersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterpretersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', mongoose_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterpretersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_interpreter_dto_1.CreateInterpreterDto]),
    __metadata("design:returntype", void 0)
], InterpretersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', mongoose_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_interpreter_dto_1.UpdateInterpreterDto]),
    __metadata("design:returntype", void 0)
], InterpretersController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', mongoose_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterpretersController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Get)(':id/calls'),
    __param(0, (0, common_1.Param)('id', mongoose_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InterpretersController.prototype, "getCalls", null);
__decorate([
    (0, common_1.Post)(':id/calls'),
    __param(0, (0, common_1.Param)('id', mongoose_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_interpreter_dto_1.CallDto]),
    __metadata("design:returntype", void 0)
], InterpretersController.prototype, "createCall", null);
__decorate([
    (0, common_1.Get)(':id/badges'),
    __param(0, (0, common_1.Param)('id', mongoose_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InterpretersController.prototype, "getBadges", null);
__decorate([
    (0, common_1.Post)(':id/badges'),
    __param(0, (0, common_1.Param)('id', mongoose_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_interpreter_dto_1.BadgeDto]),
    __metadata("design:returntype", void 0)
], InterpretersController.prototype, "createBadge", null);
exports.InterpretersController = InterpretersController = __decorate([
    (0, common_1.Controller)('interpreters'),
    __metadata("design:paramtypes", [interpreters_service_1.InterpretersService])
], InterpretersController);
//# sourceMappingURL=interpreters.controller.js.map