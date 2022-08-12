"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
(0, fs_1.readFile)(path_1.default.resolve(__dirname, "../content/first.txt"), "utf-8", (err, first) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(first);
    (0, fs_1.readFile)(path_1.default.resolve(__dirname, "../content/second.txt"), "utf-8", (err, second) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(second);
        (0, fs_1.writeFile)(path_1.default.resolve(__dirname, "../content/third.txt"), `Here is the result : ${first}, ${second}\n`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
});
