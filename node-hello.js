import http from "http";
import fs from "fs";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
});
const changeFile = [];
fs.watch("packages", { recursive: true }, (eventType, filename) => {
    if (filename.includes("CHANGELOG.md")) {
        changeFile.push(filename);
        console.log("watch changelog: ", eventType, filename);
    }
    console.log(changeFile);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
