import { readFileSync, writeFileSync } from "fs";
import path from "path";

const first = readFileSync(path.resolve(__dirname, "../content", "first.txt"), {
  encoding: "utf-8",
});
console.log(first);

const second = readFileSync(
  path.resolve(__dirname, "../content", "second.txt"),
  {
    encoding: "utf-8",
  }
);
console.log(second);

writeFileSync(
  path.resolve(__dirname, "../content", "third.txt"),
  `First file data: ${first}\nSecond file data: ${second}\n`,
  { flag: "a" }
);
