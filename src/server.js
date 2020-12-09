const http = require("http");
const host = 'localhost';
const port = 3000;

const programList = function (req, res) {
    res.writeHead(200);
    res.end("Hello World!");
};

const server = http.createServer(programList);
server.listen(port, host, () => {
    console.log("Server is running! ");
});