"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getTask = exports.deleteTask = exports.createTask = exports.getAllTasks = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const getAllTasks = (req, res) => {
    res.send("get all tasks");
};
exports.getAllTasks = getAllTasks;
const createTask = async (req, res) => {
    try {
        const task = await Task_1.default.create(req.body);
        res.status(201).json({ task });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};
exports.createTask = createTask;
const getTask = (req, res) => {
    res.send("get single task");
};
exports.getTask = getTask;
const updateTask = (req, res) => {
    res.send("update task");
};
exports.updateTask = updateTask;
const deleteTask = (req, res) => {
    res.send("delete task");
};
exports.deleteTask = deleteTask;
