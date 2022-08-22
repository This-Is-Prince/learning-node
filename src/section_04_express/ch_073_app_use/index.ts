import express from "express";
import logger from "./logger";
const app = express();
const port = process.env.PORT || 3000;
// req => middleware => res

// app.use(logger);
app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
