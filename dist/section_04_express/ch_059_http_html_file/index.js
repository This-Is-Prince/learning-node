"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
const homePage = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "../navbar-app/index.html"));
const homeStyles = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "../navbar-app/styles.css"));
const homeImage = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "../navbar-app/logo.svg"));
const homeLogic = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "../navbar-app/browser-app.js"));
const server = (0, http_1.createServer)((req, res) => {
    const { url } = req;
    if (url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.end();
    }
    else if (url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1>About Page</h1>`);
        res.end();
    }
    else if (url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeStyles);
        res.end();
    }
    else if (url === "/logo.svg") {
        res.writeHead(200, { "content-type": "image/svg+xml" });
        res.write(homeImage);
        res.end();
    }
    else if (url === "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(homeLogic);
        res.end();
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(`<h1>Page Not Found</h1>`);
        res.end();
    }
});
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
