import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(`User hit the server, url: ${req.url}`);
  res.end("Hello World!");
});
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
