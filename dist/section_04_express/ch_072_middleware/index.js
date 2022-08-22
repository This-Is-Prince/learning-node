"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// req => middleware => res
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
};
app.get("/", logger, (req, res) => {
    res.send(`<h1>Home</h1>`);
});
app.get("/about", logger, (req, res) => {
    res.send(`<h1>About</h1>`);
});
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
