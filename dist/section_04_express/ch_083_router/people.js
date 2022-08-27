"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const people = (0, express_1.Router)();
people.get("/:id", (req, res) => {
    res.send(req.url);
});
people.get("/name/1", (req, res) => {
    res.send("Prince");
});
exports.default = people;
