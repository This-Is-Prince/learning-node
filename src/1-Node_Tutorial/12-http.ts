import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("Welcome to our home page");
  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
