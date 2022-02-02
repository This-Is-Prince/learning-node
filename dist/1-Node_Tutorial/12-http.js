"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    console.log(req.url);
    res.write("Welcome to our home page");
    res.end();
});
const port = 5000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
