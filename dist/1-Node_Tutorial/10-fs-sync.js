"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const first = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "./content/first.txt"), "utf8");
const second = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "./content/second.txt"), "utf8");
(0, fs_1.writeFileSync)(path_1.default.resolve(__dirname, "./content/result-sync.txt"), `Here is the result : ${first}, ${second}`);
console.log(first, second);
