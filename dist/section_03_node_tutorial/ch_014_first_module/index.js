"use strict";
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { john, peter } from "./names";
const names_1 = require("./names");
const utils_1 = __importDefault(require("./utils"));
(0, utils_1.default)("susan");
(0, utils_1.default)(names_1.john);
(0, utils_1.default)(names_1.peter);
