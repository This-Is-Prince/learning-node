import { Router } from "express";
const item = Router();

item.get("/:id", (req, res) => {
  res.send(req.url);
});

item.get("/name/char", (req, res) => {
  const { char } = req.query;
  if (Number(char)) {
    return res.send("a b");
  }
  res.send("Items");
});

export default item;
