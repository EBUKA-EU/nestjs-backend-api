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
exports.InterpreterSchema = exports.Interpreter = exports.CallSchema = exports.Call = exports.PerformanceSchema = exports.Performance = exports.BadgeSchema = exports.Badge = exports.AddressSchema = exports.Address = exports.LanguageSchema = exports.Language = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Language = class Language {
    native;
    target;
};
exports.Language = Language;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Language.prototype, "native", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Language.prototype, "target", void 0);
exports.Language = Language = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Language);
exports.LanguageSchema = mongoose_1.SchemaFactory.createForClass(Language);
let Address = class Address {
    country;
    city;
    province;
    postal_code;
};
exports.Address = Address;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "province", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "postal_code", void 0);
exports.Address = Address = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Address);
exports.AddressSchema = mongoose_1.SchemaFactory.createForClass(Address);
let Badge = class Badge {
    badge_name;
    date_attained;
};
exports.Badge = Badge;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Badge.prototype, "badge_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Badge.prototype, "date_attained", void 0);
exports.Badge = Badge = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Badge);
exports.BadgeSchema = mongoose_1.SchemaFactory.createForClass(Badge);
let Performance = class Performance {
    professionalism;
    accuracy;
};
exports.Performance = Performance;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Performance.prototype, "professionalism", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Performance.prototype, "accuracy", void 0);
exports.Performance = Performance = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Performance);
exports.PerformanceSchema = mongoose_1.SchemaFactory.createForClass(Performance);
let Call = class Call {
    call_id;
    call_date;
    client_id;
    start_time;
    mins;
    rate_per_min;
    status;
    billable;
    dropped;
    interpreter_comments;
    client_feedback;
    call_rating_by_client;
    pay;
    service_type;
};
exports.Call = Call;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Call.prototype, "call_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Call.prototype, "call_date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Call.prototype, "client_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Call.prototype, "start_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Call.prototype, "mins", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Call.prototype, "rate_per_min", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Call.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Call.prototype, "billable", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Call.prototype, "dropped", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Call.prototype, "interpreter_comments", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Call.prototype, "client_feedback", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Call.prototype, "call_rating_by_client", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Call.prototype, "pay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Call.prototype, "service_type", void 0);
exports.Call = Call = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Call);
exports.CallSchema = mongoose_1.SchemaFactory.createForClass(Call);
let Interpreter = class Interpreter extends mongoose_2.Document {
    interpreter_id;
    name;
    email;
    is_active;
    languages;
    date_joined;
    address;
    type;
    badges;
    performance;
    calls;
};
exports.Interpreter = Interpreter;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Interpreter.prototype, "interpreter_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Interpreter.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Interpreter.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Interpreter.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.LanguageSchema] }),
    __metadata("design:type", Array)
], Interpreter.prototype, "languages", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Interpreter.prototype, "date_joined", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.AddressSchema }),
    __metadata("design:type", Address)
], Interpreter.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Interpreter.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.BadgeSchema] }),
    __metadata("design:type", Array)
], Interpreter.prototype, "badges", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.PerformanceSchema }),
    __metadata("design:type", Performance)
], Interpreter.prototype, "performance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.CallSchema] }),
    __metadata("design:type", Array)
], Interpreter.prototype, "calls", void 0);
exports.Interpreter = Interpreter = __decorate([
    (0, mongoose_1.Schema)()
], Interpreter);
exports.InterpreterSchema = mongoose_1.SchemaFactory.createForClass(Interpreter);
//# sourceMappingURL=interpreter.schema.js.map