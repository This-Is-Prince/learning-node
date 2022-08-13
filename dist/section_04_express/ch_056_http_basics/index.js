"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    console.log(`User hit the server, url: ${req.url}`);
    res.end("Hello World!");
});
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
