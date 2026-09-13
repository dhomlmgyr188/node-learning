import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("OK");
});

server.listen(3000, () => {
    console.log("Server is Runing");
})