import { Router } from "express";
const people = Router();

people.get("/:id", (req, res) => {
  res.send(req.url);
});

people.get("/name/1", (req, res) => {
  res.send("Prince");
});

export default people;
