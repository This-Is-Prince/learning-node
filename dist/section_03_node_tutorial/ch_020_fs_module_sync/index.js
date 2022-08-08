"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const first = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "../content", "first.txt"), {
    encoding: "utf-8",
});
console.log(first);
const second = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "../content", "second.txt"), {
    encoding: "utf-8",
});
console.log(second);
(0, fs_1.writeFileSync)(path_1.default.resolve(__dirname, "../content", "third.txt"), `First file data: ${first}\nSecond file data: ${second}\n`, { flag: "a" });
