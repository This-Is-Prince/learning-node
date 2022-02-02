"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
// Reading First File
(0, fs_1.readFile)(path_1.default.resolve(__dirname, "./content/first.txt"), "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log(first);
    // Reading Second File
    (0, fs_1.readFile)(path_1.default.resolve(__dirname, "./content/second.txt"), "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);
        // Writing File
        (0, fs_1.writeFile)(path_1.default.resolve(__dirname, "./content/result-async.txt"), `Here is the result: ${first}, ${second}`, { flag: "a" }, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("file writing successful...");
            }
        });
    });
});
