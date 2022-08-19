import express from "express";
import { people, products } from "../data";
const app = express();
const port = process.env.PORT || 3000;

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/people", (req, res) => {
  res.json(people);
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
