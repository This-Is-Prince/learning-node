import express, { RequestHandler } from "express";
const app = express();
const port = process.env.PORT || 3000;

// req => middleware => res

const logger:RequestHandler = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

app.get("/", logger,(req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.get("/about", logger, (req, res) => {
  res.send(`<h1>About</h1>`);
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
