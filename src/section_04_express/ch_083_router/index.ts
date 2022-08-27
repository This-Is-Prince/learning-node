import express from "express";
import item from "./item";
import people from "./people";
const app = express();
const port = process.env.PORT || 3000;

app.use("/people", people);
app.use("/item", item);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
