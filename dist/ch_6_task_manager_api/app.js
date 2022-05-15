"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const app = (0, express_1.default)();
const connect_1 = __importDefault(require("./db/connect"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// middleware
app.use(express_1.default.static(__dirname + "/public"));
app.use(express_1.default.json());
app.use("/api/v1/tasks", tasks_1.default);
// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')         - create a new task
// app.get('/api/v1/tasks/:id')      - get single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task
const PORT = 3000;
const start = async () => {
    try {
        await (0, connect_1.default)(process.env.MONGO_URI);
        console.log("CONNECTION TO DB...");
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
