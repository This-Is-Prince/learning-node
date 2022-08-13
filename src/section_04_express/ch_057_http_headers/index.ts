import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/plain",
  });
  res.end(`<h1>Hello World!</h1>`);
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
