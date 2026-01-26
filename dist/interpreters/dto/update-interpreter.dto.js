"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInterpreterDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_interpreter_dto_1 = require("./create-interpreter.dto");
class UpdateInterpreterDto extends (0, mapped_types_1.PartialType)(create_interpreter_dto_1.CreateInterpreterDto) {
}
exports.UpdateInterpreterDto = UpdateInterpreterDto;
//# sourceMappingURL=update-interpreter.dto.js.map