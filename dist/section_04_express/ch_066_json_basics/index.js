"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/products", (req, res) => {
    res.json(data_1.products);
});
app.get("/people", (req, res) => {
    res.json(data_1.people);
});
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
