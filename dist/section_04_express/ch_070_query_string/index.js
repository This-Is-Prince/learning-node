"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...data_1.products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);
});
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
