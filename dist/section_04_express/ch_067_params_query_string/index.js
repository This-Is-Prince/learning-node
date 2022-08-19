"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/api/products">Products</a>`);
});
app.get("/api/products", (req, res) => {
    const newProducts = data_1.products.map((product) => {
        const { id, name, image, price } = product;
        return {
            id,
            name,
            image,
            price,
        };
    });
    res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
    const { productID } = req.params;
    const singleProduct = data_1.products.find((product) => {
        return product.id == Number(productID);
    });
    if (singleProduct) {
        res.json(singleProduct);
    }
    else {
        res.status(404).send(`Product does not exist`);
    }
});
app.get(`/api/products/:productID/reviews/:reviewID`, (req, res) => {
    console.log(req.params);
    res.send("hi");
});
app.get("*", (req, res) => {
    res.status(404).send(`<h1>Resource not found</h1>`);
});
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
