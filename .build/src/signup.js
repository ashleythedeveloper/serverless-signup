"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSignup = void 0;
const handleSignup = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const response = {
        result: "success",
        message: "payment processed correctly",
    };
    return { statusCode: 200, body: JSON.stringify(response) };
});
exports.handleSignup = handleSignup;
//# sourceMappingURL=signup.js.map