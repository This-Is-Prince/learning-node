import { RequestHandler } from "express";
import Task from "../models/Task";

const getAllTasks: RequestHandler = (req, res) => {
  res.send("get all tasks");
};

const createTask: RequestHandler = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask: RequestHandler = (req, res) => {
  res.send("get single task");
};

const updateTask: RequestHandler = (req, res) => {
  res.send("update task");
};

const deleteTask: RequestHandler = (req, res) => {
  res.send("delete task");
};

export { getAllTasks, createTask, deleteTask, getTask, updateTask };
