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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInterpreterDto = exports.CallDto = exports.BadgeDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class LanguageDto {
    native;
    target;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LanguageDto.prototype, "native", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LanguageDto.prototype, "target", void 0);
class AddressDto {
    country;
    city;
    province;
    postal_code;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "province", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "postal_code", void 0);
class BadgeDto {
    badge_name;
    date_attained;
}
exports.BadgeDto = BadgeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BadgeDto.prototype, "badge_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], BadgeDto.prototype, "date_attained", void 0);
class PerformanceDto {
    professionalism;
    accuracy;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceDto.prototype, "professionalism", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceDto.prototype, "accuracy", void 0);
class CallDto {
    call_id;
    call_date;
    client_id;
    start_time;
    mins;
    rate_per_min;
    pay;
    status;
    billable;
    dropped;
    interpreter_comments;
    client_feedback;
    call_rating_by_client;
    service_type;
}
exports.CallDto = CallDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CallDto.prototype, "call_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CallDto.prototype, "call_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CallDto.prototype, "client_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CallDto.prototype, "start_time", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CallDto.prototype, "mins", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CallDto.prototype, "rate_per_min", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CallDto.prototype, "pay", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CallDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CallDto.prototype, "billable", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CallDto.prototype, "dropped", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CallDto.prototype, "interpreter_comments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CallDto.prototype, "client_feedback", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CallDto.prototype, "call_rating_by_client", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CallDto.prototype, "service_type", void 0);
class CreateInterpreterDto {
    interpreter_id;
    name;
    is_active;
    languages;
    date_joined;
    address;
    type;
    badges;
    performance;
    calls;
}
exports.CreateInterpreterDto = CreateInterpreterDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInterpreterDto.prototype, "interpreter_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInterpreterDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateInterpreterDto.prototype, "is_active", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => LanguageDto),
    __metadata("design:type", Array)
], CreateInterpreterDto.prototype, "languages", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateInterpreterDto.prototype, "date_joined", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AddressDto),
    __metadata("design:type", AddressDto)
], CreateInterpreterDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInterpreterDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BadgeDto),
    __metadata("design:type", Array)
], CreateInterpreterDto.prototype, "badges", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PerformanceDto),
    __metadata("design:type", PerformanceDto)
], CreateInterpreterDto.prototype, "performance", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CallDto),
    __metadata("design:type", Array)
], CreateInterpreterDto.prototype, "calls", void 0);
//# sourceMappingURL=create-interpreter.dto.js.map