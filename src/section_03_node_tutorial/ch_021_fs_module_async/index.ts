import { readFile, writeFile } from "fs";
import path from "path";

readFile(
  path.resolve(__dirname, "../content/first.txt"),
  "utf-8",
  (err, first) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(first);
    readFile(
      path.resolve(__dirname, "../content/second.txt"),
      "utf-8",
      (err, second) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(second);
        writeFile(
          path.resolve(__dirname, "../content/third.txt"),
          `Here is the result : ${first}, ${second}\n`,
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    );
  }
);
