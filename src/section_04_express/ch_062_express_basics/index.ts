import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Resource Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
