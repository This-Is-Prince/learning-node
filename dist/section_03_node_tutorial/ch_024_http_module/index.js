"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    console.log(req.url);
    res.write("<h1>hello world</h1>");
    res.end();
});
server.listen(3000, () => {
    console.log("server is listening on port 3000");
});
