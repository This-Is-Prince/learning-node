"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getTask = exports.deleteTask = exports.createTask = exports.getAllTasks = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task_1.default.find({});
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
exports.getAllTasks = getAllTasks;
const createTask = async (req, res) => {
    try {
        const task = await Task_1.default.create(req.body);
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
exports.createTask = createTask;
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task_1.default.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id ${taskID}` });
        }
        res.status(200).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
exports.getTask = getTask;
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task_1.default.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return res.status(404).json({ msg: `No task with id ${taskID}` });
        }
        res.status(200).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
exports.updateTask = updateTask;
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task_1.default.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id ${taskID}` });
        }
        res.status(200).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
exports.deleteTask = deleteTask;
