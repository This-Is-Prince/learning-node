"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// req => middleware => res
// app.use(logger);
app.use("/api", logger_1.default);
app.get("/", (req, res) => {
    res.send("Home");
});
app.get("/about", (req, res) => {
    res.send("About");
});
app.get("/api/products", (req, res) => {
    res.send("Products");
});
app.get("/api/items", (req, res) => {
    res.send("Items");
});
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
