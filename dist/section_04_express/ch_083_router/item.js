"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item = (0, express_1.Router)();
item.get("/:id", (req, res) => {
    res.send(req.url);
});
item.get("/name/char", (req, res) => {
    const { char } = req.query;
    if (Number(char)) {
        return res.send("a b");
    }
    res.send("Items");
});
exports.default = item;
