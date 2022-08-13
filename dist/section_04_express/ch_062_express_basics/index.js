"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.status(200).send("Home Page");
});
app.get("/about", (req, res) => {
    res.status(200).send("About Page");
});
app.all("*", (req, res) => {
    res.status(404).send(`<h1>Resource Not Found</h1>`);
});
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
