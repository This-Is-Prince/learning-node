import express from "express";
import tasks from "./routes/tasks";
const app = express();
import connectDB from "./db/connect";
import { config } from "dotenv";
config();

app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')         - create a new task
// app.get('/api/v1/tasks/:id')      - get single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("CONNECTION TO DB...");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
