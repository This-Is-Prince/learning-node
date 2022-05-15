import { readFile, writeFile } from "fs";
import path from "path";

// Reading First File
readFile(
  path.resolve(__dirname, "./content/first.txt"),
  "utf8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;
    console.log(first);
    // Reading Second File
    readFile(
      path.resolve(__dirname, "./content/second.txt"),
      "utf8",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const second = result;
        console.log(second);

        // Writing File
        writeFile(
          path.resolve(__dirname, "./content/result-async.txt"),
          `Here is the result: ${first}, ${second}`,
          { flag: "a" },
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("file writing successful...");
            }
          }
        );
      }
    );
  }
);
