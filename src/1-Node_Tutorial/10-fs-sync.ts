import { readFileSync, writeFileSync } from "fs";
import path from "path";

const first = readFileSync(
  path.resolve(__dirname, "./content/first.txt"),
  "utf8"
);
const second = readFileSync(
  path.resolve(__dirname, "./content/second.txt"),
  "utf8"
);

writeFileSync(
  path.resolve(__dirname, "./content/result-sync.txt"),
  `Here is the result : ${first}, ${second}`
);

console.log(first, second);
