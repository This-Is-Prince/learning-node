import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 3000;

// setup static and middleware
app.use(express.static(path.resolve(__dirname, "../navbar-app")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));
});

app.get("*", (req, res) => {
  res.status(404).send("Resource Not Found");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
